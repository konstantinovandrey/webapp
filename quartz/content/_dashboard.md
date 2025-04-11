---
layout: single-with-menu
cssclasses:
  - wide-table
  - wide-dataview
  - wide-page
banner: "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1728705162~exp=1728708762~hmac=1beb8d714bc4c0bda2364b09dd11be1b0261496923bdaec9d7c6077324c08518&w=1060"
---
# 1	Категории 

- [[1 Здоровье]]
 - [[3 Профессиональная сфера(области наук и саморазвития)]]
	- [[31 Computer Science]]
	- [[32 Математика]]
	- [[33 Естественные науки]]
	- [[34 Гуманитарные предметы]]
- [[4 Общая Wiki о жизни и её повышению эффективности]]

[[_sources]]
# 2	Последние измененные заметки:
```dataview 
 table  file.mtime as "Дата изменения" , category as category
 sort file.mtime 
 desc limit 10
```
# 3	Заметки без категории                   
```dataview
Table file.mday as "Дата изменения"
FROM 
	"notes/inbox"
WHERE
	length(file.inlinks) = 0 
	AND 
	length(file.outlinks) = 0 
	and
	contains(type,"")
	SORT file.mday DESC
```

# 4	Заметки без связи
```dataview
Table file.mday as "Дата изменения"
FROM 
	"notes/inbox"
WHERE
	contains(category, null) and contains(type, "note")
	SORT file.mday DESC
```
# 5	В работе (статус wip)
```dataview
list
FROM ""
WHERE status = "wip"
SORT file.mtime DESC
```

