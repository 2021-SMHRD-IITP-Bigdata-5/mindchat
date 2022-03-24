package com.mindchat.backend.controller;

import com.mindchat.backend.domain.ResponseDTO;
import com.mindchat.backend.domain.UserInfo;
import com.mindchat.backend.security.TokenProvider;
import com.mindchat.backend.service.UserService;
import com.mindchat.backend.utils.idUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/auth")
public class UserController {

	private final UserService userService;
	final private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	@Autowired
	private TokenProvider tokenProvider;

	UserController(UserService userservice) {
		this.userService = userservice;
	}

	@GetMapping("/test")
	public ResponseEntity<?> test() {
		return ResponseEntity.ok().body("auth_path_success");
	}

	@CrossOrigin(origins = "http://localhost:3001")
	@PostMapping("/checkemail")
	public ResponseEntity<?> checkemail(@RequestBody @Valid UserInfo userInfo) {
		System.out.println(userInfo);

		if (userService.findByEmail(userInfo.getUser_email())) {
			return ResponseEntity.status(201).build();
		}
		return ResponseEntity.status(202).build();
	}

	//회원등록
	@CrossOrigin(origins="http://localhost:3001")
	@PostMapping("/signup")
	public ResponseEntity<?> createUser(@RequestBody @Valid UserInfo userInfo) {

		String user_id_gen = idUtil.generateId(userInfo.getUser_email());
		userInfo.setUser_id(user_id_gen);
		String encoded_pw = passwordEncoder.encode(userInfo.getUser_pw());
		userInfo.setUser_pw(encoded_pw);

		if (userService.createUser(userInfo) != null) {
			return ResponseEntity.status(200).build();
		}
		return ResponseEntity.status(400).build();
	}
	//로그인 토큰 응답 확인 완료

	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@Valid @RequestBody UserInfo userInfo,
										  BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			//상세에러메세지를 쓰려면 bindingResult.getAllErrors()
			return ResponseEntity.badRequest().body("message: invalid email input"); //--잘못된 이메일 형식

		} else {
			UserInfo user = userService.getByCredentials(userInfo.getUser_email(),
					userInfo.getUser_pw(),
					passwordEncoder);

			//findByEmail 암화화x
			//getByCredentials 암호화o
			if (user != null) {
				final String token = tokenProvider.createToken(user);
				final UserInfo responseDTO = UserInfo.builder()
						.user_email(user.getUser_email())
						.token(token)
						.build();
				return ResponseEntity.ok().body(responseDTO);  //---로그인 성공시 이메일 반환
			} else {
				ResponseDTO responseDTO = ResponseDTO.builder()
						.error("Login failed - not registered email")
						.build();
				return ResponseEntity.badRequest().body(responseDTO);  //---등록되지 않은 이메일
			}
		}
	}
}
