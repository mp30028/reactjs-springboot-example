package com.zonesoft.reactspringboot.api;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(locations = {"classpath:test-application.properties"})
class ExampleApiAppTests {

	@Test
	void contextLoads() {
	}

}
