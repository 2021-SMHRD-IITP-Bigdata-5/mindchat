package com.mindchat.backend.security;

import com.mindchat.backend.domain.UserInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
public class TokenProvider {
    private static final String SECRET_KEY = "TEST1234";

    public String createToken(UserInfo userInfo){
        Date expiryDate = Date.from(
                Instant.now()
                        .plus(1, ChronoUnit.DAYS));

        return Jwts.builder()
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)  //alg  알고리즘
                .setSubject(userInfo.getUser_email())            //sub  제목
                .setIssuer("mdch")                               //iss  발급자
                .setExpiration(expiryDate)                       //exp  만료시간
                .setIssuedAt(new Date())                         //iat  발급시간
                .compact();
    };
    //----------------------------------------------------------------
    public String validateAndGetUserId(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }




}
