const onMyBirthDay = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("Im sad"))
            }
        }, 2000)
    });
};
onMyBirthDay(false)
    .then((result) => {
        console.log(`i have ${result} cakes`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("we have a party")
    })

onMyBirthDay(true)
    .then((result) => {
        console.log(`i have ${result} cakes`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log(`we have a party`)
    })