function jsonSortedStringify(o, indent, level) {
 
  indent = indent || 0;
  level = level || 0;
 
  function tab(dt) { return " ".repeat((level + (dt || 0)) * indent) };
 
  if (typeof o === "number") {
    return `${o}`;
  }
 
  if (typeof o === "string") {
    return `"${o}"`;
  }
 
  if (Array.isArray(o)) {
 
    let s = [];
    o.forEach( (value) => {
      s.push(`\n${tab(+1)}${jsonSortedStringify(value, indent, level + 1)}`);
    });
    let tail = s.length ? `\n${tab()}` : ``;
    return `[${s.sort().join()}${tail}]`;
 
  } else if (typeof o === "object") {
 
    let s = [];
    Object.entries(o).forEach( ([key,value]) => {
      s.push(`\n${tab(+1)}"${key}": ${jsonSortedStringify(value, indent, level + 1)}`);
    });
    let tail = s.length ? `\n${tab()}` : ``;
    return `{${s.sort().join()}${tail}}`;
 
  }
}
