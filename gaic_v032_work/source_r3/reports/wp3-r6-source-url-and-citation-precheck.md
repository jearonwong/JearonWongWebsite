# WP3-R6 Source URL and Citation Precheck

## Marker Parse

- Unique source/internal markers: 39
- Total source/internal marker uses: 348
- Synthesis marker uses: 24

## Checks

| Check | Result | Note |
| --- | --- | --- |
| Source markers still parse | PASS | Marker parser found valid `SRC`/`INT` markers. |
| Fake source marker exists | PASS | No unknown marker pattern found. |
| Stale EVID markers remain | PASS | No `EVID-02` or `EVID-03` markers remain. |
| Old A2A URL used | PASS | Not used in candidate artifacts. |
| LangGraph durable/persistence split | PASS | Candidate uses marker-level source; final public source notes must keep URLs split. |
| Coalition old URL used for critical claims | PASS | No central CYB-05 usage. |
| QBE/WTW/Allianz/OpenAI caveats | PASS | Caveats preserved in source/citation notes and market-signal framing. |
| Insurer/broker/product pages as market signals | PASS | Candidate preserves fragmented/conditional market framing. |
| Technical docs only technical capability sources | PASS | Technical docs are not used for insurance conclusions. |
| AIO/AIRM synthesis | PASS | Synthesis markers and boundary language preserved. |
| Coverage opinion / underwriting standard / claims approval language | PASS | Candidate states negative boundary language only. |

## Result

PASS. No P0 source issue appeared. R6 artifact generation proceeded.
