/*
 * EMP Table
 * */

SELECT *
	FROM EMP;
	
SELECT 		--3개월치의 월급을 구하라
	ENAME,
	SAL * 3,
	COMM
FROM
	EMP;


SELECT
	ENAME,
	SAL + COMM
FROM
	EMP;