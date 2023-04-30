# 회고 및 아쉬운 점

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