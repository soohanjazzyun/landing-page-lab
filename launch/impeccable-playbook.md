# Impeccable에서 지금 가져올 제품 포장과 배포 방식

작성일: 2026-11-04 KST. 공식 웹사이트, 제작자 웹사이트, 원본 GitHub 저장소를 읽고 정리했다. 아래의 `관찰`은 공개 화면과 문서에서 확인한 내용이고, `적용`은 Landing Page Lab에서 시험할 선택이다. 공개 자료만으로 별을 늘린 원인을 분리해 확인할 수는 없다.

## 확인한 실제 발표와 사례

| 공개 자료 | 확인한 내용과 날짜 | 이 자료가 증명하지 않는 것 |
| --- | --- | --- |
| [Impeccable README, 확인한 커밋](https://github.com/pbakaus/impeccable/blob/24aa2547f1d80e8d0edd767d9b76bc0bb65a3b6b/README.md) | 2026-11-04 확인. 첫 설명은 “The design vocabulary for your coding agent.” 설치 명령과 짧은 시작 절차, 같은 모델·같은 브리프의 Without/With 결과를 앞에 배치한다. 이어 구체적인 명령과 사용 대상을 보여준다. 해당 README의 마지막 변경은 2026-11-02 UTC다. | 지금의 README가 최초 출시 때부터 같았다는 근거는 없다. 한 쌍의 결과만으로 평균 효과를 알 수 없다. |
| [공식 Gallery](https://impeccable.style/gallery/) | 2026-11-04 확인. 실제 입력 프롬프트, 모델 선택, 여러 실행 결과를 공개한다. 화면에는 baseline 5회와 skill 3회가 보인다. “First-pass results, before manual polish.”라고 설명한다. 직접 만들기와 디자인 후 구현을 나누고, 후자는 사람이 고른 사례이며 피드백을 받았다고 명시한다. 과거 baseline의 이미지 생성 조건 차이와 일부 실행의 기술 수정 후 재개도 밝힌다. | 모든 결과가 동일한 조건의 무작위 실험이라는 뜻은 아니다. 보이는 사례의 디자인 차이가 전환율 차이라는 근거도 없다. |
| [Neo Mirai 공식 사례](https://impeccable.style/cases/neo-mirai/) | 2026-11-04 확인. 가상 콘퍼런스의 생성된 페이지 시안과 브랜드 참조에서 반응형 사이트로 가는 순서를 보여준다. 실제 사이트, 작업 흐름, 시작 프롬프트를 연결하고 브라우저에서 수정한 겹침·크롭·컨트롤 문제를 설명한다. 페이지에 별도 게시일은 보이지 않았다. | 실고객의 성과나 자동 한 번 실행의 결과라는 뜻은 아니다. |
| [공식 홈](https://impeccable.style/) | 2026-11-04 확인. 문제를 짧게 설명한 뒤 실제 인터페이스 변화와 특정 작업을 고르는 데모를 제공한다. 설치와 사용 방법으로 이어지는 경로가 있고, 더 깊은 사례를 따로 연결한다. | 방문자가 데모를 봐서 설치했는지, 어느 요소 때문에 별을 눌렀는지는 공개되지 않았다. |
| [Paul의 실제 회사 발표 글](https://www.paulbakaus.com/impeccable-by-design/) | 웹사이트 표시일은 **2026-07-02**다. 글은 “I've just launched Renaissance Geek”로 회사 출범을 알리며 a16z 투자와 GitHub 파트너십을 설명한다. 원래 X article과 a16z 글의 재게시라고 명시한다. 끝의 짧은 문구는 “AI raised the floor. Time to raise the ceiling.”이다. | 이것은 회사 발표다. Impeccable 도구의 최초 공개일이나 최초 X 게시일로 바꾸어 쓰면 안 된다. |
| [공식 Changelog](https://impeccable.style/changelog/)와 [GitHub 저장소 API](https://api.github.com/repos/pbakaus/impeccable) | Changelog는 v1.x를 2026-02-28부터 03-18까지 묶고, v1.0.0을 17개 명령을 갖춘 initial release로 설명한다. API의 저장소 생성 시각은 2025-11-16 01:52:04 UTC다. | 저장소 생성일, v1.0.0 출시일, 첫 홍보 게시일은 서로 다른 날짜다. 이번 확인으로 최초 홍보 게시물의 정확한 날짜와 전문은 확보하지 못했다. |
| [Paul 공식 About](https://www.paulbakaus.com/about/) → [공식 X 링크](https://x.com/pbakaus) | About 하단 링크를 따라 **@pbakaus**를 확인했다. About에는 jQuery UI, Google의 개발자 관계 업무, 제품 경력이 공개되어 있다. X 원문은 이번 읽기에서 403으로 접근이 막혔다. | 핸들을 추정하지 않았다. 검색에 잡힌 미러의 게시일·조회수·본문은 이 문서의 1차 증거로 사용하지 않았다. |

## 지금 그대로 따라 할 네 가지 기능

색, 로고, 문장, 명령 이름을 복제하지 않는다. 방문자가 무엇을 이해하고 실행할 수 있는지에 맞춰 형식과 순서를 가져온다.

| 가져올 기능 | 관찰한 사실 | Landing Page Lab에 지금 적용 | 남아 있는 가설 |
| --- | --- | --- | --- |
| **1. 한 문장으로 용도를 말하고 작업을 고르게 한다** | 공식 README는 짧은 용도 설명 뒤 명령과 적용 대상을 보여준다. 홈은 사용자가 원하는 변화를 고르게 한다. [README](https://github.com/pbakaus/impeccable/blob/24aa2547f1d80e8d0edd767d9b76bc0bb65a3b6b/README.md), [홈](https://impeccable.style/) | 상단 설명은 세 스킬의 일을 말한다. 예: **Three free agent skills for your landing page's story, audience, and offer.** 바로 아래에서 Story는 무엇을 하는지, Audience는 누구에게 말하는지, Offer는 무엇을 받고 다음에 무엇을 하는지를 고르게 한다. 저자 세 명의 이름은 관련 스킬과 출처 설명에 둔다. | 유명 저자 이름보다 작업 이름을 먼저 보여주면 방문자가 용도를 더 빨리 이해할 수 있다는 가설이다. 이해 여부는 처음 보는 사람의 설명으로 확인해야 한다. |
| **2. 실제 baseline과 skill 결과를 가까이 붙인다** | README의 비교는 모델·브리프를 밝힌다. Gallery는 여러 결과와 조건 차이도 공개한다. [README](https://github.com/pbakaus/impeccable/blob/24aa2547f1d80e8d0edd767d9b76bc0bb65a3b6b/README.md), [Gallery](https://impeccable.style/gallery/) | README 첫 화면과 Mina 사례에서 **One brief. Plain prompt vs. three skills.**를 보여준다. 동일한 source, 요청 범위, CTA를 사용한 독립 실행을 나란히 놓고 원문을 보존한다. 모델 ID를 확인하지 못했다면 `same model`이라고 쓰지 않는다. 기존 Story/Audience/Offer 전환은 각 관점의 차이로 설명한다. | 한 사례의 차이가 다른 제품에서도 반복될지는 모른다. 출력이 더 설득력 있거나 전환이 높다고 미리 판정하지 않는다. |
| **3. 완성된 결과 바로 옆에 추적 가능한 근거를 둔다** | Neo Mirai는 참조와 작동 사이트를 잇고 실제 수정 과정을 설명한다. Gallery는 선정·수동 피드백 조건을 숨기지 않는다. [사례](https://impeccable.style/cases/neo-mirai/), [Gallery](https://impeccable.style/gallery/) | Mina의 헤드라인과 실제 렌더링을 먼저 보게 하고 **Brief · Prompt · Raw output**을 가까이 둔다. `Fictional service; actual agent runs.`를 짧게 표시한다. 전체 실행 조건과 검증 기록은 펼치거나 별도 문서에서 읽게 한다. authored illustration과 actual run을 혼합해서 설명하지 않는다. | 근거 링크가 신뢰와 직접 실행에 도움을 줄 수 있다. 링크가 있다는 사실만으로 방문자가 읽었거나 믿었다고 할 수 없다. |
| **4. 가장 작은 첫 실행으로 연결한다** | README는 설치 후 좁은 대상에 명령을 쓰는 예를 제공하고, 사례는 바로 시작할 프롬프트를 제공한다. [README](https://github.com/pbakaus/impeccable/blob/24aa2547f1d80e8d0edd767d9b76bc0bb65a3b6b/README.md), [사례](https://impeccable.style/cases/neo-mirai/) | 결과를 본 다음의 주 행동은 **Try it on your README**다. 데모에서 기존 로컬 task composer로 이어지고, 첫 과제는 hero 하나로 좁힌다. 복사 가능한 설치 명령과 아래의 짧은 과제를 같은 위치에서 제공한다. 별 요청은 실제 사용 가치를 확인한 뒤의 작은 보조 행동으로 둔다. | 첫 결과를 얻는 부담을 줄일 수 있다는 가설이다. 외부 사용자가 설치하고 자신의 README로 실행하기 전까지는 채택 증거가 아니다. |

첫 실행 과제의 영어 초안:

```text
Use landing-page-story, landing-page-resonance, and landing-page-offer
to propose three hero directions from my README.
For each, return one headline, one sentence, and my existing CTA.
Keep the product facts. Mark missing evidence. Explain one tradeoff.
Source: [paste my README]
```

## 실제 비교 실행을 마친 뒤 쓸 자체 X 게시물 초안

아래는 두 개의 독립 실행을 실제로 보존하고 공개 데모에 연결한 뒤에 사용할 초안이다. 실행이나 공개를 완료했다고 미리 주장하지 않는다. 기존 세 게시물의 즉시 대체안이 아니라 새 증거가 생겼을 때의 초안이다. 본문과 링크만으로 제품을 판단할 수 있게 하고, 짧은 첨부 영상은 동일 브리프와 두 결과를 보여준다.

```text
One landing-page brief. Two fresh agent runs.

Plain prompt vs. 3 free skills for story, audience, and offer.

Both outputs are public. See what changed, then try it on your README.

Fictional service; actual runs.

https://soohanjazzyun.github.io/landing-page-lab/compare/
```

원문이 모델 실행 결과라는 점을 보이고, 특정 결과에 `winner`, `higher converting`, `10x better` 같은 판정을 붙이지 않는다. 이미 있는 [14초 게시물](https://x.com/Jazz_from_Korea/status/2117767386929795138)의 저자 크레딧을 지우거나 제휴처럼 표현하지 않는다. 프로젝트의 [NOTICE](../NOTICE.md)에는 Donald Miller, Seth Godin, Alex Hormozi의 공개 아이디어에서 받은 영감과 독립 프로젝트라는 설명을 계속 둔다.

## 무엇을 성공 원인이라고 단정하지 않을 것인가

공식 자료에서 확인할 수 있는 것은 제품 설명, 설치 경로, 비교 형식, 사례, 이후 회사 출범과 파트너십이다. **이 요소 중 무엇이 몇 개의 별을 만들었는지는 확인되지 않았다.** Paul의 경력, 기존 관계, a16z 투자, GitHub 번들은 Landing Page Lab이 오늘 복제할 수 있는 배포 채널로 계산하지 않는다. 회사 발표의 결과를 도구 최초 출시의 원인으로 거꾸로 설명하지 않는다.

Landing Page Lab은 [기록된 2026-11-03 23:46 UTC 스냅샷](metrics.csv)에서 0 stars였다. 진짜 사용자에게서 얻는 3,000 stars는 목표이며 예상 결과가 아니다. 이전 34초 게시물의 소유자 분석에서 기록한 75 impressions·0 link clicks는 그 시점의 관찰이다. 27초·34초·14초 게시물이 있고, 마지막 게시물이 게시 후 30분이 채 지나지 않았던 관찰만으로 영상 길이·얼굴 이미지·배포 실패를 판정하지 않는다.

다음 판단은 추가 제작물 수보다 **관련 방문자가 비교를 열고, 외부 사용자가 자기 README로 스킬을 실행했는지**에 둔다. 없던 측정치를 0으로 채우지 않고, 제작자의 설치·자체 점검을 외부 사용으로 세지 않는다. 실제 질문과 실패 사례를 바탕으로 설명과 첫 과제를 수정한다.
