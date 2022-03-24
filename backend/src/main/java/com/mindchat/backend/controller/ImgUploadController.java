package com.mindchat.backend.controller;

import com.mindchat.backend.domain.ProductImgUploadVO;
import com.mindchat.backend.service.ImgUploadService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/img")
public class ImgUploadController {

	@Autowired
	public ImgUploadService imgUploadService;

	@CrossOrigin(origins = "http://localhost:3001")
	@PostMapping("/upload")
	public void insertImage(@RequestPart MultipartFile files) throws IOException {

		{
			String img_filename1 = files.getOriginalFilename();
			String img_filename1Extension = FilenameUtils.getExtension(img_filename1).toLowerCase();
			File destinationFile;
			String destinationFileName;
			String img_file2 = "C:\\Users\\smrhd\\Desktop\\mindchat\\frontend\\public\\assets\\";

			do {
				destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + img_filename1Extension;
				destinationFile = new File(img_file2 + destinationFileName);
			} while (destinationFile.exists());

			destinationFile.getParentFile().mkdirs();
			files.transferTo(destinationFile);

			ProductImgUploadVO file = new ProductImgUploadVO();
			file.setImg_filename1(img_filename1);
			file.setImg_file1(destinationFileName);
			file.setImg_file2(img_file2);

			System.out.println("컨트롤러 파일값"+file);

			imgUploadService.insertImg(file);
		}

	}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ테스트코드 시작ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//	@CrossOrigin(origins = "http://localhost:3001")
//	@PostMapping("/test")
//	public String insertImage(@RequestPart MultipartFile files) throws IOException {
//
//		System.out.println("여기오류");
//
//		return "test";
//
//
//	}
	//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ테스트코드ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

}







