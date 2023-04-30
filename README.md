# Fizz.gg

League of Legend 의 전적검색사이트

- 링크 : https://summoner-search-lake.vercel.app

## 개발스택

- TypeScript
- Next.js
- React
- Recoil
- React Query

## 홈 페이지

![image](https://user-images.githubusercontent.com/62933450/227794972-7733a4c1-20da-43ec-92b8-79cd6f148783.png)

- 검색창에 League of Legend 닉네임을 검색할 수 있습니다. 검색 시 전적 화면으로 이동합니다
- 하단 Header와 Footer를 통해 제 Github과 Home페이지를 이동할 수 있습니다.

## 전적 페이지

![image](https://user-images.githubusercontent.com/62933450/227795133-4880cd82-ed0c-4674-82b5-a98b5ba12741.png)

![image](https://user-images.githubusercontent.com/62933450/227795190-dfa074a3-43aa-4b24-bc7a-2a69f5acbcff.png)

- 검색한 닉네임의 최근 전적이 나옵니다. 더욱 많은 전적을 원할 시 스크롤을 내리면 무한스크롤로 정보가 나옵니다.
- 최근 전적의 승, 패 통계, 자유랭크와 솔로랭크의 티어, 최근 챔피언 승률이 좌측 섹션에 나옵니다.
- 각 매치에 대한 통계를 각각의 카드로 볼 수 있으며, 아래 화살표를 클릭시 더욱 디테일한 정보가 나옵니다.(사진2)
- 디테일 화면의 다른 닉네임을 클릭시, 그 닉네임의 전적 페이지로 이동합니다.
- 상단 Header를 통해 다시 검색할 수 있습니다.
- 인게임 버튼을 통해 인게임페이지, 소환사 정보 버튼을 통해 소환사 정보 페이지로 이동할 수 있습니다. 또한 업데이트를 통해 새로 검색을 할 수 있습니다.

## 인게임 페이지

![image](https://user-images.githubusercontent.com/62933450/227795326-3ab68d86-1367-44ec-ab28-0c4ccbd40d57.png)

![image](https://user-images.githubusercontent.com/62933450/227795416-70c383ec-436d-4463-b0b6-2887bb619245.png)

- 해당 닉네임 유저가 게임중인지 알 수 있습니다.
- 게임중일시, 해당 게임에 대한 정보가 나옵니다.
- 매치 정보 버튼을 통해 매치 페이지, 소환사 정보 버튼을 통해 소환사 정보 페이지로 이동할 수 있습니다. 또한 업데이트를 통해 새로 검색을 할 수 있습니다.

## 소환사 정보 페이지

## 회고 및 아쉬운 점

- 회사에서의 경험으로. 작업을 하면서 단순 기능이 작동하는 것도 중요하지만, 남이 봤을때 내 코드가 어떻게 보이는가에 대한 중요성을 느꼈다.
  어떻게 하면 잘 보일 수 있을까에 대해 고심을 많이 했고 VAC 패턴과 Tailwind apply 기능 적용을 해보았다.
  이후 Five Lines Of Code 책을 읽고 리팩토링 예정이다.
- VAC 패턴을 이용하여 UI와 로직을 분리했으나, Props가 너무나도 비대해져 버리는 결과가 나왔고, 오히려 가독성을 해치는 결과가 나왔다.
  Props하나를 컴포넌트에 넘길때에도, 선언, Props Mapping등의 절차가 있어 일정 단위 이하의 간단한 로직에는 적용을 하지 않는게 가독성을 위한 길이지 않나 생각했다.
  추후 리팩토링을 통해 좀 더 가독성 좋은 코드로 만들어 보고 싶다.
- TailWind CSS를 사용하면서 공용컴포넌트를 어떻게 하면 만들 수 있을까 고민을 많이 했다.
  Props로 받아 처리하는 Style 정보들을 동적으로 생성하려 했는데, 공식문서를 보니 동적으로 생성되는 Class는 처리가 안되었다.
  그래서 Class Name 자체를 넘기거나, Mapper를 사용했는데 이 점이 아쉬웠다. TailWind만 사용하는게 아니라,
  Twin.Macro 같이 TailWind 와 CSS-in JS 방식을 사용하여 보완해보고 싶다.
