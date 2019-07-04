@if(isset($attr->image))
  <tr>
    <td align="left" style="font-size:0px; padding:0px 25px; word-break:break-word;">
      <div style="font-family:-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;;font-size:14px;font-weight:300;line-height:24px;text-align:left;color:#616161;">
        <p class="ndn-serif" font-weight="100" padding-top="0" padding-bottom="10px" line-height="24px" font-size="16px" style="font-family: athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif;">
          <img src="{!! $attr->image !!}" width="100%" style="width: 100%" />
        </p>
      </div>
    </td>
  </tr>
@endif
