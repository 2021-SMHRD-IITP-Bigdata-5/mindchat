package com.mindchat.backend.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

@Configuration
@ConfigurationProperties(prefix = "spring.datasource.hikari")
@MapperScan(basePackages="com.mindchat.backend")
public class DatabaseConfig extends HikariConfig {

    String mapperLocation = "mapper/*.xml";

    @Bean
    public HikariDataSource dataSource(){ return new HikariDataSource(this);}
    @Bean
    public SqlSessionFactory SqlSessionFactory (DataSource dataSource) throws Exception{
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        sqlSessionFactoryBean.setMapperLocations((new PathMatchingResourcePatternResolver().getResources(mapperLocation)));
        return sqlSessionFactoryBean.getObject();
    }


}
