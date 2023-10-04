function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ctEGgXADzO":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v8q1attempts:player.GetVar("v8q1attempts"),v8q1answeredcorrect:player.GetVar("v9q1answeredcorrect"),v9q2attempts:player.GetVar("v9q2attempts"),v9q2answeredcorrect:player.GetVar("v9q2answeredcorrect"),v9q3attempts:player.GetVar("v9q3attempts"),v9q3answeredcorrect:player.GetVar("v9q3answeredcorrect")})
	}
	)
}

