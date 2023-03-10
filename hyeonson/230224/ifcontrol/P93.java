package ifcontrol;

import java.util.Scanner;

public class P93 {

	public static void main(String[] args) {
		// 숫자 4개의 2자리수를 입력 받는다.
		// 만약 2자리수가 아니면 프로그램 종료
		Scanner sc = new Scanner(System.in);
		
		int ko = 0;
		int en = 0;
		int ma = 0;
		int si = 0;
		
		int total = 0;
		double avg = 0;
		String grade = "";
		
		System.out.println("국어성적 입력 :");
		ko = Integer.parseInt(sc.next());	// 문자로 입력되므로 숫자로 변환
		if( ko > 99 || ko < 10 ) {
			 sc.close();
			 return;
		}
		System.out.println("영어성적 입력 :");
		en = Integer.parseInt(sc.next());
		if( en > 99 || en < 10 ) {
			 sc.close();
			 return;
		}
		System.out.println("수학성적 입력 :");
		ma = Integer.parseInt(sc.next());
		if( ma > 99 || ma < 10 ) {
			 sc.close();
			 return;
		}
		System.out.println("과학성적 입력 :");
		si = Integer.parseInt(sc.next());
		if( si > 99 || si < 10 ) {
			 sc.close();
			 return;
		}

		// 평균과 합계를 구합니다.
		// 평균이 90이상이면 A
		// 평균이 80이상이면 B
		// 평균이 70이상이면 C
		// 평균이 60이상이면 D
		// 60미만이면 F
		
		total = ko + en + ma + si;
		avg = (double)total/4;		// 그냥 계산하면 정수/정수라서 정수만으로 계산됨
		grade = (avg >= 90) ? "A" : (avg >= 80) ? "B" : (avg >= 70) ? "C" : (avg >= 60) ? "D" : "F";
		
		System.out.printf("합계 : %d, 평균 : %4.2f, 학점 : %s", total, avg, grade);
		
		// 합계, 평균, 학점을 출력하시오
		sc.close();
		
	}

}
