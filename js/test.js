obj = {
  test: {
    test2: {
      test3: "value",
      test4: "value2"
    }
  }
}

funcName = (objParam) => {
  let spreaded = {...objParam}
  console.log(spreaded)
}

funcName(obj)
