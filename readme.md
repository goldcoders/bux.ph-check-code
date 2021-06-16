# Bux.ph Fetch Details Api

> Use With Thriftshop Site as a Serverless Function

## Requirements
- netlify-cli
- postman

## Development
- [ ] Clone this Repo

```sh
git clone https://github.com/goldcoders/bux.ph-generate-code
cd  bux.ph-generate-code
```

- [ ] Edit ENV: `cp .env.example .env anad edit .env`

- [ ] Install Any NPM Dependencies type: `yarn`

- [ ] Run Local Server: `netlify dev`

- [ ] open postman and set url to `http://localhost:8888/api` method: ***POST***

- [ ] Add Raw JSON

```json
{
    "req_id": "req_4"
}
```

- [ ] Click Send, Receive the Response

<details>
  <summary>Response JSON</summary>

```json
{"status":"Pending",
"id":7488,
"amount":"1254.00",
"ref_code":"9921-1670-0061",
"channel":"7-Eleven",
"image_url":"https://bux-api-prd-storage.s3.amazonaws.com/media/barcodes/9921-1670-0061.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYFTIVUQLPJG42SNS%2F20210616%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20210616T180633Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e40c353d0831cf1a82f9e148229d10996ff96d7c653c417d9cdfa232b09f8827",
"seller_name":"GOLDCODERS CORP",
"expiry":"Jun 18 2021, 11:59 PM",
"created":"Jun 16 2021, 02:38 AM",
"param1":"test param1",
"param2":"test param2",
"fee":20,
"instructions":{
  "Payment":["Go to nearest branch","Present the barcode or reference number","Pay the specified amount","The Cashier will process your payment in real-time"]
  },
"terms":"https://www.cliqq.net/terms/",
"link":"https://bux.ph/test/payment/cbdbaa5c46624d569bbb7a5a4b2858c5/",
"payment_url":null
}
```

- image_url: qrcode that will be use by the payment gateway
- payment url: only available if we pay via card
- link: goest to redirect url , better we set redirect url to specific receipt or url to view receipt
</details>

## 1 Click Install For Production

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/goldcoders/bux.ph-check-code)

## Deploy on One Specific Site URL in Production

- Go to [Settings](https://app.netlify.com/sites/tss-test/settings/general)

- Click Change Site Name `bux.ph-check-code.${yourdomain}.com`

## Production

- make post request with Needed *payload* to `bux.ph-check-code.${domain}.com/api`

