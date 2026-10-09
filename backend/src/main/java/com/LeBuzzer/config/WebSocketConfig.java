package com.LeBuzzer.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;



@Configuration //let Spring know its a config file
@EnableWebSocketMessageBroker //init the stomp engine above the websocket 
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override 
    public void configureMessageBroker(MessageBrokerRegistry registryConfig)
    {
        //activate broker's memory towards subscribed clients
        registryConfig.enableSimpleBroker("/topic"); //every topic starts with topic
        registryConfig.setApplicationDestinationPrefixes("/app"); //set prefixe for messages coming from 
    }
    @Override 
    public void registerStompEndpoints(StompEndpointRegistry registry) //save endpoint connection
    {
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*"); //allow cross origin CORS connections from 8080 to 5173
    }



}
