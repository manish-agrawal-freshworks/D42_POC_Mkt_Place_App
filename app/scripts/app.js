document.onreadystatechange = function() {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    const onInit = app.initialized();

    onInit
      .then(function getClient(_client) {
        window.client = _client;
        client.events.on('app.activated', renderContactName);
      })
      .catch(handleErr);
  }
};

function renderContactName() {
  // const textElement = document.getElementById('apptext');
  // client.data
  //   .get('requester')
  //   .then(function(payload) {
  //     textElement.innerHTML = `Data Method returned: ${payload.requester.name}`;
  //   })
  //   .catch(handleErr);

  const inputTag = document.getElementById('inputTagName');
  const changeTagBtn = document.getElementById('btnChangeTagName');
  changeTagBtn.addEventListener('click', function (event) {
    const targetValue = event.currentTarget.dataset.target;
    const inputValue = inputTag.value;
      client.interface.trigger('updateAssetFields', { id: 'tagName', text: inputValue });
  });
}

function handleErr(err = 'None') {
  console.error(`Error occured. Details:`, err);
}
