package com.example.centerdeformation.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {

    // Define the JavaMailSender bean
    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("your-smtp-host");
        mailSender.setPort(587);
        mailSender.setUsername("your-email-username");
        mailSender.setPassword("your-email-password");

        return mailSender;
    }
}
