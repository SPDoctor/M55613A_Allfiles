let db;
let request = indexedDB.open("DelegateDatabase");
request.onsuccess = function(event) {
  db = event.target.result;
  let store = db.transaction("delegates").objectStore("delegates");
  store.get("1").onsuccess = function(event) {
    console.log(event.target.result);
}};
request.onupgradeneeded = function(event) {
  db = event.target.result;
  let store = db.createObjectStore("delegates", { 
    keyPath: "id"
  });
  store.add({ id: "1", name: "John Doe", password: "1234" });
};
request.onerror = function(event) {
    alert("Error " + event.target.errorCode);
};

