package com.mindchat.backend.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    //CORS 허용
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("https://localhost:3001")
                .allowedMethods("GET","POST")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }

    //스태틱 경로
    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {"classpath:/static/"};
    //외부이미지 경로
    private final String resourcePath="file:///"+"C:\\Users\\smrhd\\Desktop\\mindchat\\frontend\\public\\assets\\";
    //경로 핸들러
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS)
                .addResourceLocations(resourcePath);
    };





}
