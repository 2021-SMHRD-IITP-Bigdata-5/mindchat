package com.mindchat.backend.utils;

import org.apache.commons.lang3.RandomStringUtils;

public class idUtil {
	public static String generateId(String email){
		String email_id=email.substring(0,email.indexOf('@'));
		String random_string = RandomStringUtils.random(10,33,125,true,true);
		return email_id+random_string;
	};
}
