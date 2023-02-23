package variable;
import java.util.Scanner;

public class email {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("이메일을 입력하세요 : ");
		String email = sc.next();
		
		int specific = email.indexOf('@'); /* @ index 추출 */
	
		String id = email.substring(0,specific);
		String domain = email.substring(specific+1, email.length());
		
		System.out.printf("%s, %s", id, domain);
	}
	

}
