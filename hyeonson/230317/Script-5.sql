SELECT ENAME
FROM EMP
WHERE DEPTNO = '10';

SELECT ENAME, JOB, SAL, DEPTNO
FROM EMP
WHERE DEPTNO=20 AND JOB = 'ANALYST';

SELECT *
FROM EMP
WHERE SAL = (SELECT MAX(SAL) FROM EMP);