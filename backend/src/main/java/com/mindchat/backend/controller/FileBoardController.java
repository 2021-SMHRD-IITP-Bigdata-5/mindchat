package com.mindchat.backend.controller;


import com.mindchat.backend.domain.ProductImgUploadVO;
import com.mindchat.backend.domain.ProductInfo;
import com.mindchat.backend.service.FileBoardService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/fileBoard")
public class FileBoardController {

	FileBoardService fboardService;
	@Autowired
	FileBoardController ( FileBoardService fboardService
	){
		this.fboardService= fboardService;
	}

	@GetMapping("/list")
	private String fileBoardList(Model model, HttpServletRequest request) {

		List<ProductInfo> testList = new ArrayList<>();
		testList = fboardService.getFileBoardList();
		model.addAttribute("testlist", testList);
		return "/fileBoard/list";
	}

	@RequestMapping("/detail/{p_seq}")
	private String fileBoardDetail(@PathVariable("p_seq") int p_seq, Model model) {
		model.addAttribute("detail", fboardService.fileBoardDetail(p_seq));

		ProductImgUploadVO file = fboardService.fileDetail(p_seq);

		if (fboardService.fileDetail(p_seq) == null) {
			return "view/detail";
		} else {
			model.addAttribute("file", fboardService.fileDetail(p_seq));
			return "view/detail";
		}
	}
	@RequestMapping("/insert")
	private String fileBoardInsertForm(@ModelAttribute ProductInfo board) {
		return "fileBoard/insert";
	}

	@RequestMapping("/delete/{p_seq}")
	private String fileBoardDelete(@PathVariable("p_seq") int p_seq) {
		fboardService.fileBoardDelete(p_seq);
		return "redirect:/fileBoard/list";
	}

	@RequestMapping("/insertProc")
	private String fileBoardInsertProc(@ModelAttribute ProductInfo board, @RequestPart MultipartFile
			files, HttpServletRequest request) throws IllegalStateException, IOException, Exception {

		if (files.isEmpty()) {
			fboardService.fileBoardInsert(board);

		} else {
			String img_filename1 = files.getOriginalFilename(); // 사용자 컴에 저장된 파일명 그대로
			//확장자
			String img_filename1Extension = FilenameUtils.getExtension(img_filename1).toLowerCase();
			File destinationFile; // DB에 저장할 파일 고유명
			String destinationFileName;
			//절대경로 설정 안해주면 지 맘대로 들어가버려서 절대경로 박아주었습니다.
			String img_file2 = "C:\\Users\\smrhd\\demo\\demofile\\";

			do { //우선 실행 후
				//고유명 생성
				destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + img_filename1Extension;
				destinationFile = new File(img_file2 + destinationFileName); //합쳐주기
			} while (destinationFile.exists());

			destinationFile.getParentFile().mkdirs(); //디렉토리
			files.transferTo(destinationFile);

			fboardService.fileBoardInsert(board);

			ProductImgUploadVO file = new ProductImgUploadVO();
			file.setP_seq(board.getP_seq());
			file.setImg_filename1(destinationFileName);
			file.setImg_file1(img_filename1);
			file.setImg_file2(img_file2);

			fboardService.fileInsert(file);
		}

		return "forward:/fileBoard/list"; //객체 재사용
	}

	@RequestMapping("/update/{p_seq}")
	private String fileBoardUpdateForm(@PathVariable("p_seq") int p_seq, Model model) {
		model.addAttribute("detail", fboardService.fileBoardDetail(p_seq));
		return "fileBoard/update";
	}

	@RequestMapping("/updateProc")
	private String fileBoardUpdateProc(@ModelAttribute ProductInfo board, @RequestPart MultipartFile
			files, HttpServletRequest request) throws IllegalStateException, IOException, Exception {

		if (files.isEmpty()) {
			fboardService.fileBoardUpdate(board);
			int pseq = board.getP_seq();
			String p_seq = Integer.toString(pseq);
			return "redirect:/fileBoard/detail/" + p_seq;

		} else {
			fboardService.fileBoardUpdate(board);

			String img_filename1 = files.getOriginalFilename(); // 사용자 컴에 저장된 파일명 그대로
			//확장자
			String img_filename1Extension = FilenameUtils.getExtension(img_filename1).toLowerCase();
			File destinationFile; // DB에 저장할 파일 고유명
			String destinationFileName;
			//절대경로 설정 안해주면 지 맘대로 들어가버려서 절대경로 박아주었습니다.
			String img_file2 = "C:\\Users\\smrhd\\demo\\demofile\\";

			do { //우선 실행 후
				//고유명 생성
				destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + img_filename1Extension;
				destinationFile = new File(img_file2 + destinationFileName); //합쳐주기

				int p_seq = board.getP_seq();


				// --- 추가

				String savedFileName = (String) fboardService.fileDetail(p_seq).getImg_filename1();
				File savedFile = new File(img_file2 + "/" + savedFileName);
				if (savedFile.exists()) {
					savedFile.delete();
				}

				// --- 추가


			} while (destinationFile.exists());

			destinationFile.getParentFile().mkdirs(); //디렉토리
			files.transferTo(destinationFile);

			int p_seq = board.getP_seq();
			fboardService.fileDelete(p_seq);

			ProductImgUploadVO file = new ProductImgUploadVO();
			file.setP_seq(board.getP_seq());
			file.setImg_filename1(destinationFileName);
			file.setImg_file1(img_filename1);
			file.setImg_file2(img_file2);

			fboardService.fileInsert(file);
		}

		return "forward:/fileBoard/list"; //객체 재사용
	}
}
