// Published by Sites when the learner requests: "Save this session to my garden."
// Append one entry per session. Reuse its ID and increment revision for corrections.
window.GARDEN_STUDY_NOTES = [];

function mergePublishedStudyNotes(existing,published,seen){
 const records=[...existing],versions={...seen};let changed=false;
 for(const note of published){
  if(!note||typeof note.id!=='string'||!/^study-[a-zA-Z0-9-]+$/.test(note.id)||!Number.isInteger(note.revision)||note.revision<1||typeof note.title!=='string'||!note.title.trim()||note.title.length>145||typeof note.body!=='string'||!note.body.trim()||note.body.length>20000||typeof note.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(note.date)||Number.isNaN(Date.parse(note.date+'T00:00:00Z'))||new Date(note.date+'T00:00:00Z').toISOString().slice(0,10)!==note.date)continue;
  if(Number(versions[note.id]||0)>=note.revision)continue;
  const record={id:note.id,kind:'Note',title:note.title.trim()+' · '+note.date,topic:typeof note.topic==='string'?note.topic.slice(0,80):'Study sessions',provider:'My study session',body:note.body,url:typeof note.sourceUrl==='string'?note.sourceUrl:'',status:'Planned',progress:0,priority:'',color:['sage','lilac','peach','butter','blue','pink'].includes(note.color)?note.color:'blue',steps:[]};
  const index=records.findIndex(r=>r.id===note.id);if(index>=0)records[index]=record;else records.unshift(record);versions[note.id]=note.revision;changed=true;
 }
 return {records,versions,changed};
}
function syncPublishedStudyNotes(){
 const key='learning-garden-published-study-v1';let seen={};
 try{seen=JSON.parse(localStorage.getItem(key)||'{}');if(!seen||Array.isArray(seen)||typeof seen!=='object')seen={}}catch{}
 const merged=mergePublishedStudyNotes(records,window.GARDEN_STUDY_NOTES||[],seen);
 if(!merged.changed)return;records=merged.records;
 try{localStorage.setItem(KEY,JSON.stringify(records));localStorage.setItem(key,JSON.stringify(merged.versions))}catch{storageOK=false}
}
