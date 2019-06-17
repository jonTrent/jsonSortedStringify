# jsonSortedStringify
Custom version of JSON stringify that produces output sorted by object properties and array values.  This is useful when comparing (eg, via PatienceDiff) objects that have similar properties and array values, but not necessarily in the same order.

# Interface

## <b>result = jsonSortedStringify(object, indent)</b>

where:<br>
* object = the object to stringify.
* indent = the optional number of spaces to indent per level.  Default is 0.
    
* result = stringified object, sorted by object properties and array values.

# Example
The following example shows the results of jsonSortedStringify on a nested object.
```
var o = { 
    foo:"bar",
    arr:[4,1,2,3],
    arr2: [],
    subo: {
        foo2:"bar2",
        foo3: [{e: 1, d:2, c: 3},"a","b",]
    },
    job: {}
};

result = jsonSortedStringify( o, 4 );
```
...returns a string of...
```
{
    "arr": [
        1,
        2,
        3,
        4
    ],
    "arr2": [],
    "foo": "bar",
    "job": {},
    "subo": {
        "foo2": "bar2",
        "foo3": [
            "a",
            "b",
            {
                "c": 3,
                "d": 2,
                "e": 1
            }
        ]
    }
}
```
