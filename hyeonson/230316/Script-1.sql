SELECT ENAME
	 , SAL * 3		-- ename :
	 , COMM			-- quarterly
	FROM EMP;		-- commision : WHY? WHEN?

SELECT ENAME
	   , SAL + COMM
	   FROM EMP;