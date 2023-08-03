
export default async function ecpaycallback(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { RtnCode, RtnMsg } = req.body

  if (RtnCode == 1 & RtnMsg == "Succeeded") {
    res.redirect(302, 'https://www.accentcoach.co/order/order_success/');

  } else {
    res.redirect(302, 'https://www.accentcoach.co/order/order_fail/');

  }
}
