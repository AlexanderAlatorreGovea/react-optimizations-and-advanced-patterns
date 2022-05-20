// store-document.js
function storeDocumentfunc(
  { userDB, folderDB, userAccess, fileStorage },
  userID,
  folderLocation,
  fileStream
) {
  console.log(userID);
}

export default function Func(deps) {
    console.log(deps)
  return storeDocument.bind(null, deps);
}

// view.js
export function view(storeDocument) {
  // lots of view logic here
  storeDocument(123, "/tmp7sddsas", "myFileStream");
}

// main.js

view(storeDocumentfunc);

const storeDocument = storeDocumentfunc({
  userDB: "userDB",
  folderDB: "folderDB",
  userAccess: "userAccess",
  fileStorage: "fileStorage",
});
