package variable;

import java.util.Scanner;

public class email {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		System.out.println("이메일을 적어주세요");
		String mail = sc.next();
		
	
		int idx = mail.indexOf("@");
		System.out.println(idx);
		
		String id = mail.substring(0,idx);
	    String domain = mail.substring(idx+1);
	    
	    System.out.printf("%s %s",id,domain);
	}

}
