console.log("github 공부하기");

/*
여기서 수정하면 github에서도 수정이 되도록 해보자

먼저 crtl + ` 를 사용해서 terminal 열어준다.
내가 작성한 코드를 git add를 통해서 staging(local) 로 이동시켜준다.
git add (파일명)으로 파일 하나를, git add * 으로 파일에서 변경된 전체를 하나의 staging(local)으로 모을 수 있다.
staging(local)에 저장된 파일들은 commit을 통해서 하나의 묶음으로 올릴 수 있고 이는 하나의 세이브 포인트가 된다. 
staging(local)->commit(내 작업을 내 컴퓨터 속에 하나의 묶음으로 저장, 하나의 세이브 포인트)
이때 git status를 통해 commit속 파일이름과 commit에 묶을만한 변경된 파일이 있는지를 알 수 있다
(음료수 - 포카리, 콜라, 사이다 )  
commit명 - 음료수
staging(local)속 filename - 포카리, 콜라, 사이다

다음으로는 commit에 올라간 파일들을 git push를 이용해서 origin(웹사이트 서버-클라우드)으로 이동시켜줘야 한다.
commit -> origin
git log를 통해서 내가보고 있는 local HEAD가 어디에 위치하는지 확인가능하다. 
head가 origin/main(클라우드상 업로드 된 장소) 보다 상위 commit에 존재한다면 push할 것이 있는 것이다.
거꾸로 head가 origin/main보다 아래에 있다면 pull(서버에서 코드 받아오기) 할 것이 있는 것이다.

업로드 과정 정리
파일을 원하는 만큼 add를 통해서 staging(local)에 올리고  올라간 파일을 commit을 통해서 하나의 묶음, 작업 포인트로 지정해주고 이를 push를 통해 클라우드로 이동시킨다
git add 1,2,3,4파일 -> staging(local) - 1,2,3,4파일이 존재 -> git commit -m '묶을 이름' -> git push로 클라우드로 이동


파일은 log를 통해 본 것처럼 기본적으로 main(본인이 설정한 중심이 되는 곳)에 업로드 된다.
하지만 우리가 어떤 시점으로부터 여러가지 선택지를 가지고 작업하고 싶다면 이때 우리는 branch를 사용한다.
commit -> commit -> branch1 (덧셈)
                 -> branch2 (곱셈)
뭐가 더 좋을지 둘다 작업하고 main에 사용할지 말지 결정할 수 있다.
branch만드는 방법운
먼저 cmd에서 git branch branch명으로 새 branch를 만들고 이를 push해주면 웹과 연동이 안되어 있어서 등록이 안된다. 
 push --set-upstream origin branch명 나오는데 이를 cmd에 치면 웹과 연동이 된다.
그리고 웹에서 branch를 만들고 pull로 내 컴퓨터에 가져오는것 이렇게 2가지가 있다 
.
만들어진 branch는 git checkout branch명으로 이동 가능하다.
*/

/* 
code 파일위치를 통해서 vscode를 열 수 있다
*/
