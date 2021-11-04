var json_str = `{
    "events": [
        {
            "event_id": 1,
            "date": 8,
            "type": "warning",
            "content": "This is warning event."
        },
        {
            "event_id": 2,
            "date": 8,
            "type": "success",
            "content": "This is usual event."
        },
        {
            "event_id": 3,
            "date": 10,
            "type": "error",
            "content": "This is error event."
        },
            {
            "event_id": 4,
            "date": 11,
            "type": "success",
            "content": "This is looooooooooooong usual event."
        }
    ]
}`;

var events_info = JSON.parse(json_str);

var queryDaysEvent = function(date) {
    
    let arr=[];
    for (let i in events_info.events) {
        if (events_info.events[i].date === date) {
            arr.push(events_info.events[i]);
        }
    }
    console.log(arr);
    return arr;


}

export {queryDaysEvent};