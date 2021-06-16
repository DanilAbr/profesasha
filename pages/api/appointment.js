// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  const token = "1713499961:AAH8nTGx1blAMmAMrs2MDcSt1AjxMxUb4OQ";
  const chatId = "-524204177";
  const txt = JSON.stringify(req.body);

  const requestUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`;

  fetch(requestUrl)
    .then(() => {
      res.status(200).json({ name: 'John Doe', requestBody: req.body })
    })
    .catch(() => {
      res.status(500).json({error: "something going wrong"});
    });
}
