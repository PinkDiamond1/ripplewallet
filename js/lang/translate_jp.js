/* exported translate_jp */
var translate_jp = {
  header_wellcome : 'リップルへようこそ　価値のインターネット',
  login_desc : 'ウォレットはプライベートキーを使ってアカウントにログインします。プライベートキーはあなたのパソコンの中に保存されるため、アカウントはあなたのパソコンと同様に安全です。必ずプライベートキーをバックアップしてください。',
  open_wallet: 'ウォレットを開く',
  create_wallet: 'ウォレットを作る',
  open_account : 'アカウントを開く',
  open_temp_act: '仮アカウントを開く',
  select_file : 'アカウントファイルを選択する',
  create_new_account : '新しいアカウントを作る',
  create_new_account_info : 'プライベートキーはあなたのローカルファイルに保存され、パスワードによって保護されます。更なる安全性を確保したい場合はハードウェアウォレットをご利用ください。',
  account_password : 'アカウントパスワード',
  open_existed_account : '既存アカウントを開く',
  create_blank : '新しいアカウントを作る',
  create_by_secret : 'プライベートキーを使ってアカウントを作る',
  create_by_mnemonic : '復元パスフレーズを使って作る',
  enter_mnemonic : '復元パスフレーズを入力してください',
  encrypt_new_file : '新しいアカウントファイルを暗号化する',
  wallet_file : 'ウォレットファイル',
  password : 'パスワード',
  pwd_weak : 'パスワードの強度が低いです。英文字、数字、記号を組み合わせるパスワードを推薦します。',
  password_confirm : 'パスワードを確認する',
  pwd_not_match : 'パスワードが一致しません',
  encrypt_account : 'アカウントを暗号化する',
  create_secret : 'プライベートキーを使ってアカウントを作る',
  enter_secret : 'プライベートキーを入力してください',
  invalid_account: 'アカウントは無効です',
  invalid_secret : 'プライベートキーは無効です',
  invalid_mnemonic: '復元パスフレーズは無効です',
  important : '重要：',
  security_notice : '万一パスワードを紛失した場合に、以下のプライベートキーを使って資産を取り戻すことが可能です。プライベートキーを分かれば誰でも資産を引き出すことができます。必ず安全な場所に保管してください。',
  show_password : '表示',
  hide_password : '非表示',
  public_address : 'パブリックアドレス',
  secret_key : 'プライベートキーと復元パスフレーズ',
  mnemonic: '復元パスフレーズ',
  or: 'Or',
  show_secret: 'プライベートキーを表示する',
  hide_secret: 'プライベートキーを非表示する',
  are_you_sure_secret: '今安全な場所にいますか？人や監視カメラに見られていませんか？',
  save_safe: 'プライベートキー/復元パスフレーズを安全な場所に保存しましたか？',
  yes_save: 'はい、保存しました！',
  cancel : 'キャンセル',
  back   : '戻る',
  confirm: '確定',
  stop_countdown: '自動ジャンプをキャンセルする',
  
  /** Balance & Trust **/
  overview: '概要',
  balance : '残高',
  reserve   : '凍結：',
  total : '注文総額',
  trust : '与信',
  asset : '資産',
  no_balance  : 'アカウントが見つかりませんでした。リップルネットワーク接続を確認してください。',
  trust_limit : '与信限度額',
  add_trust : 'ゲートウェイへ与信する',
  trust_src : '与信してから該当資産の入金と受取が可能になります。',
  trust_note: '注意: 初期リストはリップルのマーケットウェブサイトからのものであり、ウォレットはゲートウェイの信頼性調査を行いません。信用できないゲートウェイへ与信しないでください。',
  trust_remove : '与信を削除する',
  trust_noremove_desc : '与信を削除する必要がありません。',
  trust_removeing : '削除中……',
  trust_add : '与信',
  fed_add : 'federationを通じて与信する',
  fed_desc: 'federation URLを入力すれば、与信できます。',
  fed_url : 'federation URL',
  fed_unable : '資産が見つかりませんでした',
  fed_loading: '資産解析中',
  manual_add : '手作業で与信する',
  issuer_invalid : '発行者アカウントは有効なリップルアドレスである必要があります。',
  trust_granted  : '与信限度額設定成功！',

  /** send **/
  send : '発送',
  send_money : '送金',
  name_or_address : '受取側の名前やアドレス',
  send_note : '注意：受取側も同じ資産へ与信する必要があります。',
  recipient : '受取者',
  dest_tag  : '宛先タグ',
  tag_need  : '受取側は宛先タグを添付することを要求しています。分からない場合は、事前に受取者と連絡を取ってください。',
  disallow_xrp: '受取側は{{code}}送金を拒否します！強制的に{{code}}送金しますか?',
  will_receive: '相手は以下の金額を受け取ります',
  invalid_address : '連絡帳に登録した方や有効なリップルアドレスにしてください。',
  invalid_amount : '有効な金額ではありません。',
  invalid_domain : '応答がありません',
  account_loading: 'アカウントを解析中',
  sending_to   : '相手へ発送中',
  send_done    : '送金成功',
  not_funded   : 'アクティブ化されていません。20枚以上の{{code}}を発送してアカウントを作ってください。',
  no_send_path : 'あなたと相手アカウント間のパスが見つかりませんでした。',
  you_sending : 'あなたは{{code}}を以下のアドレスへ発送します',

  contacts : '連絡帳',
  contact  : '連絡者',
  address  : 'アドレス',
  add_contact : '連絡帳に登録する',
  edit        : '編集',
  leave_blank : '任意，空欄OK',
  Delete      : '削除',
  are_you_sure: '確定しますか？',
  no_contact  : '連絡帳に登録者がいません。「連絡帳に登録する」ボタンをクリックし、連絡者を登録してください。',
  error_need_contact : '連絡者を入力してください',
  error_same_contact : '既に登録済みです',
  error_need_address : 'アドレスを入力してください',
  error_invalid_address : '有効なアドレスではありません',
  error_invalid_tag     : '有効な宛先タグではありません',
  error_already_name    : '同名の連絡者が既に存在します',

  /** Convert **/
  convert       : '兌換',
  convert_title : '資産を別資産へ兌換します',
  convert_input : '兌換の情報を入力してください。',
  convert_nopath: '兌換のパスが見つかりませんでした。資金や与信が不足している可能性があります。',
  receive       : '受取',
  calculating   : '計算中……',
  path_updated  : 'パス前回更新は',
  seconds_ago   : '秒前',
  converting    : 'あなたは以下の資産へ兌換しています',
  converting_to : '↓',
  pay_most      : '最大限のコストは以下です',
  submitting    : '取引情報をリップルネットワークへ発送しています',
  submitted     : '取引情報を発送しました。',
  cleared       : '取引はキャンセルされました！',
  act_will_upd  : '取引完了後、アカウントの情報は更新されます。',
  back_convert  : '次の兌換をする',
  go_balance    : 'バランス画面に戻る',

  /** History **/
  history: '履歴',
  you         : 'あなた',
  date        : '日付',
  account_id  : 'アカウント',
  loading     : '読み込み中...',
  load_more   : 'さらに読み込む',
  no_more     : 'これ以上の取引はありません',
  
  you_convert: 'あなたは以下の資産への兌換を要求します',
  you_convert_to: '→',
  you_sold: 'あなたは以下の資産を売却します',
  you_sold_for: '以下の資産を受け取りました', 
  you_bought: 'あなたは以下の資産を購入しました',
  you_bought_for: 'あなたは以下の金額を払いました', 
  order_filled: '。この注文は完全に完了しています。',
  rest_cancel: '。残りの注文は資金不足のためキャンセルされました。',
  order_has: '。この注文は以下の金額が残っています',
  remaining: '。',
  you_sell: 'あなたは売却の注文を作りました。以下の資産を売却します',
  you_sell_for: '以下の資産を受け取ります',
  you_buy: 'あなたは購入の注文を作りました。以下の資産を購入します',
  you_buy_for: 'あなたは以下の金額を払います',
  you_cancel: 'あなたは以下の注文をキャンセルしました　注文内容：以下の金額を払います',
  you_cancel_for: '以下の資産を購入します',
  you_trust: 'あなたは以下の資産へ与信します',
  you_trust_for: '与信限度額を以下の金額にしました',
  trust_you: 'あなたへ以下の金額を与信しました',
  you_sent: 'あなたは以下の資産を発送します',
  you_sent_to: 'あなたは以下の受取者へ送金しました',
  sent_you: 'あなたへ以下の金額を送金しました',
  bal_change : 'あなたの所有資産が変動しました',
  order_cancel: '注文：以下の金額を払います',
  order_cancel_for: '以下の資産を購入します',
  order_cancel_due: '資金不足のため、キャンセルされました。',
  accountset: 'アカウントの情報が更新されました',
  rippling: '同種類の貨幣はスワップ可能',
  failedtx: '失敗した取引',
  tx_tag: '。(タグ',
  another_payment: '別の支払いをします',
  request_quote: '見積を依頼しています',

  choose : '選択',
  example : '例',
  refresh : 'リフレッシュ',
  asset_code : '資産コード',
  issuer_id : '発行者アカウント',
  amount : '金額',
  optional : '任意',
  required : '必須',

  trade : '取引',
  normal: '標準',
  sent  : '発送',
  received : '受取',
  created : '作る',
  offer : '注文',
  offer_cancel    : 'Cancel',
  offer_canceling : 'キャンセル中...',
  type  : '種類',
  price : '価格',
  action: '操作',
  buy   : '買い',
  sell  : '売り',
  fatfinger : '警告:あなたの注文は市場価格から大幅に外れています！',
  orderbook : 'オーダーブック',
  buy_offers : '買い注文',
  sell_offers: '売り注文',
  no_bids : '該当ペアは注文がありません',
  no_asks : '該当ペアは注文がありません',
  sum   : '総量',
  size  : '数量',
  ask_price : '売り気配値',
  bid_price : '買い気配値',
  manager_offer : '注文管理',
  your_buy_offers  : '自分の買い注文',
  your_sell_offers : '自分の売り注文',
  no_offers : '注文はありません',
  you_have      : '所有資産は以下です',
  order_amount  : '数量',
  price_of_each : '単価',
  order_value   : '注文総額',
  offer_success : '注文成功',
  trade_pick : '取引資産を選択する',
  as_base    : '主軸通貨とする',
  as_counter : '決済通貨とする',
  base_asset    : '主軸通貨',
  counter_asset : '決済通貨',
  pick_book  : 'ほかの資産と取引するには以下の取引ペアを選択できます。',
  trade_pair : 'トレードペア',
  pick_trade : '戻る',
  trade_page : '取引画面',
  advanced   : 'アドバンス',
  show_all   : '注文一覧',
  buying     : '購入中',
  selling    : '売却中',

  /** Setting & security **/
  settings : '設定',
  network  : 'ネットワーク',
  proxy    : '代理',
  server : 'サーバー',
  port : 'ポート',
  add : '追加',
  reset : 'リセット',
  remove : '削除',
  selected_net    : '現在ご利用のネットワーク',
  switch_net      : 'リップルネットワーク',
  switch_net_desc : 'テストネットワークは開発、テストと研究のために使用するテスト環境です。ウォレットの機能は基本パブリックネットワークの環境に適用します。技術者以外の場合は、テストネットに切り替えることをおやめください。',
  public_net : 'パブリックネットワーク',
  test_net   : 'テストネットワーク',
  other_net  : 'カスタム',
  'Ripple Public Network' : 'パブリックネットワーク',
  'Ripple Test Network' : 'テストネットワーク',
  'User defined' : 'カスタム',
  public_url : 'Public Net URL',
  test_url   : 'Test Net URL',
  other_url  : 'Network URL',
  passphrase : 'パスフレーズ',
  max_fee     : '最大費用',
  max_fee_desc: 'ネットが渋滞になる場合に許可できる最大費用は以下です。',
  timeout      : 'タイムアウト',
  timeout_desc : 'サーバーに接続する最大時間（秒）。',
  coin_ticket: '資産コード',
  fed_protocol: 'Federation Protocol',
  fed_ripple  : 'Ripple Service',
  fed_ripple_desc : 'リップルアドレスを入力すれば、自動的に以下のドメインを解析する。',
  fed_bitcoin  : 'Bitcoin Service',
  fed_bitcoin_desc : 'ビットコインアドレスを入力すれば、自動的に以下のドメインを解析する。',
  save     : '保存',
  security : 'セキュリティ',

  home_domain : 'ドメイン',
  domain_desc : 'アカウントに一つのドメインを追加できます。ドメイン名を介して詳細なヘルプ情報を取得できます。',
  domain_done : 'ドメイン設定成功',
  payment_flag: '支払標識',
  disallowxrp : '当アカウントはXRPを受け取りしないことを相手に通知します。重要:相手は強制的に発送できます。',
  requiretag  : '宛先タグが必要であることを相手に通知します。',
  setrippling : '資産のスワップ（Rippling）を許可します。危険な操作です。発行者以外の場合にはつけないでください。',
  flags_done  : '設定成功',
  manage_data : 'データ',
  messagekey_desc : 'このアカウントに暗号化されたメッセージを送信するための公開鍵。',
  back           : '戻る',

  AccountDelete : 'アカウントを削除する',
  merge_desc     : '危険!該当操作はあなたが所有する{{code}}を相手側へ発送します。手数料: ',
  account_noclean: 'アカウントはクレジットライン等債務関係を持たないこと。',
  dest_account   : '宛先アカウント',
  delete_warning : 'すべてのリスクを了解しました >>',
  merge_done     : 'あなたのアカウントは宛先アカウントと合併されました。',
  
  /** Deposit & withdrawl **/
  service : 'サービス',
  deposit_withdraw : '入出金',
  deposit  : '入金',
  withdraw : '出金',
  dw_coin  : '入金と出金',
  dw_desc_line1 : 'XRP以外の暗号資産と法定通貨を入出金する場合にはゲートウェイを使用する必要があります。',
  dw_desc_line2 : '以下のゲートウェイを選択することができます。コミュニティから選出され、Federation Protocolが実現したゲートウェイです。',
  gateway   : 'ゲートウェイ',
  gateways  : 'ゲートウェイ',
  no_trust : '該当資産に与信してください',
  alipay   : 'アリペイ',
  bank_card : '銀行口座',
  fill_form : 'フォームに入力してください。',
  analyzing : '解析中……',
  will_recv : '相手側は以下の資産を受け取ります',
  can_send  : 'あなたは以下の資産を発送できます',
  attention : '注意点',

  ripple : 'リップル',
  ripple_desktop_client : 'Foxlet Wallet for Ripple',
  wallet_notice1 : 'あなたの資産とウォレットは暗号化アルゴリズムによって保護されています。使用するにはプライベートキーが必要です。',
  wallet_notice2 : 'ウォレットファイルを紛失したら回復できません。必ずウォレットやプライベートキーをバックアップしてください！',
  wallet_notice3 : 'パスワードを忘れないでください。他人にパスワードやプライベートキーを漏らさないでください！',
  app_open_source : 'This app is open source now.',
  github_feedback : 'githubにてフィードバックしてください。',
  qq_feedback     : '   QQグループ703611153でコミュニケーションしてください。',
  trade_volume : '24時間取引金額',
  wallet : 'ウォレット',
  version: 'バージョン',
  logout : 'ログアウト',
  new_version_available: '新しいバージョンが見つかりました',

  /** Error **/
  NotFoundError : '該当アカウントが見つかりませんでした。アクティブ化してください。',
  NotConnectedError : 'サーバーに接続されていません。しばらくしてからもう一度お試しください。',
  NoRippleTXT: '該当サイトはripple.txtファイルを提供していません',
  NoFederationUrl: '該当サイトはFederation Protocolが適用されていません',
  'Invalid Email' : 'メールアドレスが間違っています。',
  NetworkError: 'Network error.'
}
