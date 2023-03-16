--137P
SELECT 100 + 5, 10-3, 30*2, 10/3 FROM DUAL;


SELECT dbms_random.value() * 100 AS randomnum FROM DUAL; --컬럼명을 AS로 별칭사용

SELECT ENAME FROM EMP AS employee;

SELECT ENAME AS "employee name" FROM EMP employee;

--정렬
SELECT * FROM EMP ORDER BY SAL; --오름차순

SELECT * FROM EMP ORDER BY SAL DESC; --내림차순

SELECT * FROM EMP ORDER BY DEPTNO ASC, SAL DESC; --DEPTNO 오름차순, SAL 내림차순

SELECT * FROM NLS_DATABASE_PARAMETERS ;

SELECT * FROM NLS_DATABASE_PARAMETERS WHERE PARAMETER = 'NLS_CHARACTERSET';

SELECT * FROM NLS_DATABASE_PARAMETERS WHERE PARAMETER LIKE '%LANGUAGE';