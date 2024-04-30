console.log("github 공부하기");

/*
여기서 수정하면 github에서도 수정이 되도록 해보자

먼저 crtl + ` 를 사용해서 terminal 열어준다.
내가 작성한 코드를 git add를 통해서 staging(local) 로 이동시켜준다.
git add (파일명)으로 파일 하나를, git add * 으로 파일에서 변경된 전체를 하나의 staging(local)으로 모을 수 있다.
staging(local)에 저장된 파일들은 commit을 통해서 하나의 묶음으로 올릴 수 있고 이는 하나의 세이브 포인트가 된다. 
staging(local)->commit(내 작업을 내 컴퓨터 속에 하나의 묶음으로 저장, 하나의 세이브 포인트)
(음료수 - 포카리, 콜라, 사이다 )  
commit명 - 음료수
staging(local)속 filename - 포카리, 콜라, 사이다  

다음으로는 commit에 올라간 파일들을 git push를 이용해서 origin(웹사이트 서버-클라우드)으로 이동시켜줘야 한다.
commit -> origin
작업의 과정은
파일을 원하는 만큼 add를 통해서 staging(local)에 올리고  올라간 파일을 commit을 통해서 하나의 묶음, 작업 포인트로 지정해주고 이를 push를 통해 클라우드로 이동시킨다
git add 1,2,3,4파일 -> staging(local) - 1,2,3,4파일이 존재 -> git commit -m '묶을 이름' -> git push로 클라우드로 이동

파일은 main(본인이 설정한 중심이 되는 곳)에 업로드 된다.
하지만 우리가 어떤 시점으로부터 여러가지 선택지를 가지고 작업하고 싶다면 이때 우리는 branch를 사용한다.

git push로 현재 branch에 업로드 가능하다
*/
