// 이렇게 찍었어요 — 유형별 공개 릴스 게시물 코드 (instagram.com/p/코드/ 의 코드 부분)
// 사이트는 유형마다 이 중 5개를 일주일 동안 보여주고, 매주 월요일 아침 10시에 다음 5개로 바꿔.
// 예약 작업이 매일 로그인 없이 임베드되는지 검사해서, 지워졌거나 비공개가 된 영상은 빼.
// 키는 index.html CONTENTS의 title과 똑같아야 해.

// 이 20개 묶음의 1주차가 시작된 월요일. 한 달에 한 번 새 20개로 갈 때 그 주 월요일로 바꿔.
window.REELS_START = "2026-11-16";

window.REELS = {
  "자취 요리 레시피 릴스": ["DdBV4YiRagc","DfGkvc0TRxL","DYE03JdiBBQ","DaNbKzcxn3A","DfmIRHvpC1k"
    ,"Deqq054oXBj","DcgG2gKqhnX","DdK9IbaxrJa","DXp_fF2D5K3","DciZ95LvJW5"
    ,"DYCCl5kyrqg","Dd7_AuNMdfB","DQRU9IZiQA5","DSJURmLEtzt","De_pBa3AHN8"
    ,"DWfUPMjDy_f","DZKOzaNxuAR","Dd3ic60g3Dw","DLy0gYhyTvq","DfFEwRKTM1G"],
  "카페 투어 기록": ["DJHQVT4ppSk","Dd2kj0Kvi_B","C-wba50yPFo","DXociKIzU4W","DbzRWHaPm-C"
    ,"DdQ34VtBBro","DYPfW-XyMaR","DXykP0VysdV","DHQp7qXSEtr","DcfRnGJzM4p"
    ,"DZSW_kvSTjt","DFH-el9pOeX","DM6Zeneod0K","DcqmeXbTJuR","DYe6nFaSpbg"
    ,"DYmSQ3eS0wg","DczfwDwBVUA","DAvCvVZJtWe","DamLHeVRrJ1","CxHwv7jPe41"],
  "여행 브이로그": ["DYUKr3zz6Rs","DXCAH3OktAc","DcQf91EhTvb","DUIqVewEhqb","DPv2siKEXEO"
    ,"DRBoZ6mk3eQ","DdSOeAMy6-i","DLPs2NjznDU","DeymuypyKW3","DfPSVw_AeFk"
    ,"Dd3dvG0SryG","DTh9WMfk8lL","DewNybIvzz3","Dei6MzXvSnr","DS9jlsLkkJM"
    ,"Dejh1swp3cW","Dbm9v7dHEuf","DMaFNLnv98B","DZ5Eb5-w4fU","Dbab8AjyuK0"],
  "데일리 코디 (OOTD)": ["C_sRjm-JqqC","DYUOz-YJInx","CyI3_vevrbf","Dey9KlSSJoq","DRwjVnxDxBi"
    ,"DejlgbSpYvz","DYdpEaTtOj4","DfrcPUHSSDu","DZXQk2Zx9Mp","DfWsG1uPUAs"
    ,"DUNaaUrCdFV","DPdv6JUAfUv","C0DkSHsPmk6","DVVEaRkkvDE","DfUkMpvpsj1"
    ,"DYbBEbgyGKy","DfZcG56T3-M","DaDBvqzT3w_"],
  "메이크업 튜토리얼": ["DcgJcc3PukT","De1v4jogDf6","DcXaMNpTYNF","DbA6PuxJD_f","Dd6QyUszyVv"
    ,"DfE2-YysYx_","DYJyCXmymDr","DdG5cv9TW7g","DHQjRUfPnuY","DSFKV8hkgtp"
    ,"De6k_5egFON","DZXR-tTyY6_","DPHA0QIEgnW","DXdNYMskcNG","DNXlYucyw8P"
    ,"DYI7uKgSsFG","DLHLMgsykDk","DKhGye7JS0L","DTNORSwk4Il","DPqyYw3keJe"],
  "홈트 / 운동 챌린지": ["DfWJjh9OZsw","C-PoAmUJPiP","DU4zVNUCYz_","DFDN1QhPtWL","DZj6T1vzwyP"
    ,"DR2AMhMiVQx","DgAMcPYhDMZ","DWqvGZygSPq","C-Xe2bYyZV_","DfPjGnHz5it"
    ,"DZ7djPZN90c","DN5NIVwEm5w","DWFPq1zksDh","Cvm8mHKMSPQ","Df4WEfOSGEF"
    ,"Deg5AUFTr1z","DI1VcTKTSA2","DfUNjp3gIKX","DOIdOBkj1WX","DerToPBz_vy"],
  "공부 기록 (스터디윗미)": ["C2EIx28SRH1","DaLJTCJK4kN","DRHFYDHksuV","C5ux9rLynPT","DUnxwAhieRW"
    ,"DehNtMyiZ6z","DUiQbJBkT7O","DeUeiawTlUA","Dc3U39jzXLW","DYcG0kNN4Ep"
    ,"DUZOy3PEzSy","C6s5Z2Kydq8","DXa4YJdk6s_","Dfw8BXwoLw-","Dci4m5kxPjc"
    ,"DW38eWTAb5C","Dbu96dpJCtD","DfIH9r4zAPt","DcJH8y5TdKQ","DfSy_lQz913"],
  "반려동물 일상": ["DbTPVcsnUnC","Debwt5zIxKl","DRAMcJOklEl","DcVCohEBT4c","Df5leB2TBeQ"
    ,"C4UlBwjrI-G","Crc7y9no6hQ","DXFhEFlkzx0","Ct-nyisOGIv","DMHnLuszedr"
    ,"DNU8SzYxamf","DdajujgSx6Q","Df97cnwSqbl","C8E30wVpK0B","DfgfO4CT5MC"
    ,"Dd1TPQlJbQ6","DftoguDJxlW","DYqgA1eTk_A","CTaE9QHp_KX","DWgVkFjkbey"],
  "방꾸미기 Before/After": ["DRgh8tdkg_N","Deob1pLSCvq","Dbsff5-zKeB","DaK1GtGhj7v","DVcFxqAkiu4"
    ,"DUNGgGOkVp5","DfCRZnTSJgW","Ddd2Isyvl1y","DZmo2VOSBsA","DeHMP2axAUt"
    ,"Dfd88RIB41y","DfEopOOznBp","DcYohgRhKEQ","DewXYBgB6xa","Dey3YTHNNlt"
    ,"DaK0ZbKzAFc","Df6_rBpy0-o","DUImwUSD4lJ","DYUqBKBpWYv","Dev6LUMR4oj"],
  "책 리뷰 카드뉴스": ["Df5iawOTktY","DVbIGHtEcbn","De_43FQyyUX","DQRbqxJAVXD","DeOf5W-Obe6"
    ,"Degs8s9CDYX","Dd8vj9kvtYc","DZCggxsJyDW","Ddl-bU7CxDG","DIyIShsTNSN"
    ,"DeESYZHRrkv","DfwoqargRDE","DbDjLa_OnW8","Dfeuao6TNAM","Da0K0g0pNKb"
    ,"Dd27AkAPirt","DbrwLPLTBuB","DfrleQGx6DL","DcTrMYcpTvX","DeJhiQkvl2O"],
  "그림 과정 타임랩스": ["DRt91rrD4i9","C0X9ekFvfa5","DXLAGbdkg3I","DQLhwMQgfTA","C2riwYyvJGG"
    ,"DZPm96dPMQm","DaRh3lORDk8","DdOt399zUJw","DciSMUNR2rj","DZcQZ9SAANQ"
    ,"De6FQ8HJNad","C4AU1u8PlD-","DLEsmffRSmt","DEqsu41yOzy","C0JuyF-PuTx"
    ,"DcOVIZQvaM_","Df9PsDfSmhJ","DT7-AVyD9-S","DbdNvxUKM2r"],
  "커버곡 / 연주 영상": ["DSNYTPFEzFN","DegjvkAzSvg","Dev7LEvThfd","DeKO4W3vvzs","DewI9xjhNlX"
    ,"DfCYl_QpART","DcycHaiTlDB","DbVYhjxvLyS","DdGViBNymMA","DfXsOEpTsq5"
    ,"DZUxGqYOnE3","Dc6ISPfS7VR","DUitcQmEp1W","DQEd31REjGt","DcdiOtYhAr_"
    ,"CFEHtvjgqHc","DbesMf0hgDx","DeOoh07JNc0","DfUy62ePky5","DUujFErk4x5"],
  "게임 하이라이트": ["DfbrHBtB5lG","DfUFKx6zaTz","DblCNJZyr9q","DfHo9QJhPRv","DfwRhS6P8sR"
    ,"DfXEWWBT7c0","DeYxHObBywX","Df4rWuts-tS","Dc25kUPTRwF","DVYOWyDEcV9"
    ,"DfMp3aVsKCH","DdwJE83vN3I","Df363CvhtHU","DfUyV8qITw5","DfoEdYOTg6D"
    ,"DcalHePh83Z","DaPnr25RrYM","DgAK-yhonlD","Df6DB0BT52K"],
  "AI / 코딩 꿀팁 카드뉴스": ["DfegZq4h_pS","Ct6Nw_WvXfT","DcNDOOmz3jv","Dd8KC7KTKUQ","DfV4VpLyRZF"
    ,"DWOMg2QCu3s","DSC6vMOD-Du","DfviMzevtMx","Dfv6uuYBlOV","DTCFgXME5wc"
    ,"DftxhfTSfig","DcgDknCSdXb","DfouYCBPjzZ","Ddggv7cyox9","DezcYIviR-0"
    ,"DWLtJ_OEr50","DdvVoD7Puwk","CpZni4Qjinu","DcYNSwOzfjC","DfGCgEQtp_w"],
  "절약 / 가계부 기록": ["Df4y5lXS7QQ","DKB2CRGPQ4C","C-eT04Ovm8p","DaNda3yhZel","CrahwdJppg3"
    ,"DYHN-1GzvdJ","Df1cW7nC14o","DaoX-hKz9Oq","DYMW4keTz86","DZhBw9dzU7R"
    ,"DJV_C2EynGl","DSKP__IEjFG","DZmhn-_Bvr3","DclOm9YS55i","DbsqiisiWBJ"
    ,"C8qR6F6P1mu","Df7Pe4WTvJl","DWThwLnAUfy","Df4MA7ZA2hn","Dc-cTuFsw8L"],
  "감성 사진 / 사진 꿀팁": ["DflejaDzd9b","Dfrjotqz6Ma","DemWxkph9IJ","Dfb9nW-yH8l","DSR3Q1oEqd4"
    ,"DdsfstTCePZ","DXBaDQIjyJW","DWnz-POE1Jz","C2Jjwv7r8kE","DByam-LzWKl"
    ,"DF6lGwRzBnh","C2oj7m5vOH9","Dawebt1kQ-D","Cve_X1GNz3L","Dfo-KxcylZ9"
    ,"DL96bsdp86g","C0thUY1Jk0i","C0ER3_Sv3WO","C26eI66vdxj","DB6BM16SWwr"]
};
