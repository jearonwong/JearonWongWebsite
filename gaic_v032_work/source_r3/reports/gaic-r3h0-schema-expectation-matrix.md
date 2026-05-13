# GAIC-R3H-0 Schema Expectation Matrix

Generated: 2026-05-13

| Route Family | Expected Schema | R3H-0 Status |
|---|---|---|
| Homepage | WebSite, Person, WebPage, ProfilePage, BreadcrumbList | Satisfied by BaseLayout plus homepage JSON-LD. |
| About | WebSite, Person, AboutPage, ProfilePage, BreadcrumbList | Satisfied. |
| Concepts index | CollectionPage, DefinedTermSet, ItemList pattern, BreadcrumbList | Satisfied with CollectionPage/DefinedTermSet/BreadcrumbList plus global WebSite/Person. ItemList semantics are represented through DefinedTermSet entries. |
| Concept detail | WebPage, TechArticle, DefinedTerm, BreadcrumbList | Satisfied by concept detail template. |
| Concepts Map | WebPage, DefinedTermSet, ItemList, BreadcrumbList | Satisfied; server-rendered text fallback and links mirror visual entity mesh. |
| Research index | CollectionPage, ItemList, BreadcrumbList | Satisfied. |
| GAIC white paper hub | WebPage, TechArticle/CreativeWork, MediaObject, BreadcrumbList | Satisfied by hub JSON-LD with artifact encodings/checksums. |
| GAIC systems index/detail | CollectionPage/ItemList index; WebPage/TechArticle detail; BreadcrumbList | Satisfied. |
| Essays index/detail | CollectionPage/ItemList index; Article detail; BreadcrumbList | Satisfied. |
| Projects index/detail | CollectionPage/ItemList index; CreativeWork detail; BreadcrumbList | Satisfied. |
| Playbooks index/detail | CollectionPage/ItemList index; WebPage/TechArticle detail; BreadcrumbList | Satisfied. |
| Extended ecosystem index/detail | CollectionPage/ItemList index; WebPage/TechArticle detail; BreadcrumbList | Satisfied. |
| Governance index/detail | CollectionPage/ItemList index; WebPage/TechArticle detail; BreadcrumbList | Satisfied. |
| Standalone responsive white paper HTML | WebSite, Person, WebPage, TechArticle, BreadcrumbList | Repaired in R3H-0; public HTML checksum updated. |
| Supporting standalone pages | ContactPage/WebPage, CollectionPage/WebPage, BreadcrumbList as appropriate | Repaired for contact, newsletter, theories, theory-clusters, and definitions where page-level schema was thin. |
