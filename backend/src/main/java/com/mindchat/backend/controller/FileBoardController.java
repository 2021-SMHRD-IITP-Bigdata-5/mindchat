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
			String img_filename1 = files.getOriginalFilename(); // ????????? ?????? ????????? ????????? ?????????
			//?????????
			String img_filename1Extension = FilenameUtils.getExtension(img_filename1).toLowerCase();
			File destinationFile; // DB??? ????????? ?????? ?????????
			String destinationFileName;
			//???????????? ?????? ???????????? ??? ????????? ?????????????????? ???????????? ?????????????????????.
			String img_file2 = "C:\\Users\\smrhd\\demo\\demofile\\";

			do { //?????? ?????? ???
				//????????? ??????
				destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + img_filename1Extension;
				destinationFile = new File(img_file2 + destinationFileName); //????????????
			} while (destinationFile.exists());

			destinationFile.getParentFile().mkdirs(); //????????????
			files.transferTo(destinationFile);

			fboardService.fileBoardInsert(board);

			ProductImgUploadVO file = new ProductImgUploadVO();
			file.setP_seq(board.getP_seq());
			file.setImg_filename1(destinationFileName);
			file.setImg_file1(img_filename1);
			file.setImg_file2(img_file2);

			fboardService.fileInsert(file);
		}

		return "forward:/fileBoard/list"; //?????? ?????????
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

			String img_filename1 = files.getOriginalFilename(); // ????????? ?????? ????????? ????????? ?????????
			//?????????
			String img_filename1Extension = FilenameUtils.getExtension(img_filename1).toLowerCase();
			File destinationFile; // DB??? ????????? ?????? ?????????
			String destinationFileName;
			//???????????? ?????? ???????????? ??? ????????? ?????????????????? ???????????? ?????????????????????.
			String img_file2 = "C:\\Users\\smrhd\\demo\\demofile\\";

			do { //?????? ?????? ???
				//????????? ??????
				destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + img_filename1Extension;
				destinationFile = new File(img_file2 + destinationFileName); //????????????

				int p_seq = board.getP_seq();


				// --- ??????

				String savedFileName = (String) fboardService.fileDetail(p_seq).getImg_filename1();
				File savedFile = new File(img_file2 + "/" + savedFileName);
				if (savedFile.exists()) {
					savedFile.delete();
				}

				// --- ??????


			} while (destinationFile.exists());

			destinationFile.getParentFile().mkdirs(); //????????????
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

		return "forward:/fileBoard/list"; //?????? ?????????
	}
}
