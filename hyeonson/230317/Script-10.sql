SELECT * FROM v$sqlfn_metadata;

SELECT * FROM EMP e WHERE upper(ename) = upper('scott');

SELECT INSTR('HELLO, ORACLE!', 'L') AS INSTR_1
, INSTR('HELLO, ORACLE!', 'L', 5) AS INSTR_2
, INSTR('HELLO, ORACLE!', 'L',2, 2) AS INSTR_3
FROM DUAL;

SELECT EMPNO, ENAME, CONCAT(EMPNO, ENAME),
		CONCAT(EMPNOM, CONCAT':', ENAME))
	FROM EMP
	WHERE ENAME = 'SMITH';
	
SELECT '[' || TRIM('__Oracle__')||']' AS TRIM,
'[' || TRIM(LEADING FROM '__Oracle__')||']' AS TRIM_LEADING,
'[' || TRIM(TRAILING FROM '__Oracle__')||']' AS TRIM_TRAILING,
'[' || TRIM(BOTH FROM'__Oracle__')||']' AS TRIM_BOTH
FROM DUAL;