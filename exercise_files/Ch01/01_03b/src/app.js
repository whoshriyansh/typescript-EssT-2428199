async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  contact.id = 1234
  contact.birthDate = new Date
});

getContact("2").then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
