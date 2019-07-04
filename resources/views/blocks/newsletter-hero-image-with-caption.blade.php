@if(isset($attr->imageUrl))
  <!--<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><v:image style="border:0;height:409px;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" src="https://ndncollective.org/app/uploads/2019/07/image2-e1562020644349.png" xmlns:v="urn:schemas-microsoft-com:vml" /><![endif]-->
  <div style="margin:0 auto;max-width:600px;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
      <tr style="vertical-align:top;">
        <td background="{!! $attr->imageUrl !!}"
          style="background:#2a3448 url({!! $attr->imageUrl !!}) no-repeat center center / cover;background-position:center center;background-repeat:no-repeat;padding:0px;vertical-align:top;"
          height="0">
          <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style=""><![endif]-->
          <div class="mj-hero-content" style="margin:0px auto;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;">
              <tr>
                <td>
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="width:100%;margin:0px;">
                    <tr>
                      <td align="center" style="font-size:0px;padding:40px 40px 40px 40px;word-break:break-word;">
                        <div
                          style="font-family:Helvetica;font-size:25px;font-weight:900;line-height:190px;text-align:center;text-transform:uppercase;color:#ffffff;">
                          &nbsp;</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </table>
  </div>
  <!--[if mso | IE]></td></tr></table>-->
@endif

@if(isset($attr->captionText))
  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div style="background:white;background-color:white;Margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
      style="background:white;background-color:white;width:100%;">
      <tbody>
        <tr>
          <td
            style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="Margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="width:100%;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                      <div class="mj-column-per-100 outlook-group-fix"
                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                          style="vertical-align:top;" width="100%">
                          <tr>
                            <td align="left"
                              style="font-size:0px;padding:10px 25px;padding-top:0;padding-bottom:0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;;font-size:12px;font-weight:300;line-height:14px;text-align:left;color:#616161;">
                                <p class="ndn-sans" font-size="12px">{!! $attr->captionText !!}</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--[if mso | IE]></td></tr></table>-->
@endif
