package variable;

import java.util.Scanner;

public class P69_2 {

	public static void main(String[] args) {
		
		//이메일주소 뽑아내기 원본
		String email = "jmlee@tonesol.com";
		
		String id = email.substring(0, 5);
		String domain = email.substring(6, 17);
		
		System.out.printf("%s, %s",id,domain);
		
		//
		Scanner sc = new Scanner(System.in);
		System.out.println("이메일주소를 입력하세요");
		String cmd = sc.next();
		System.out.printf("%s를 입력 했습니다.",cmd);
		sc.close();
		
	}

}
