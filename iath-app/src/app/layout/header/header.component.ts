import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <svg class="logo" width="100" height="83">
        <g fill="#FFF" fill-rule="nonzero">
          <path d="M39.996 11.528c.144 0 .284.011.422.034.139.025.255.06.351.108a45.409 45.409 0 0 0-.05 2.935 48.18 48.18 0 0 1-.048 3.005h-1.349v-3.739a2.59 2.59 0 0 0-.414.525c-.125.207-.252.422-.38.644-.13.222-.265.44-.406.657-.14.215-.294.41-.462.583a3.161 3.161 0 0 1-.504-.575 8.8 8.8 0 0 1-.405-.647 26.027 26.027 0 0 0-.386-.662 4.04 4.04 0 0 0-.45-.612v3.826a2.624 2.624 0 0 1-.705.063 1.723 1.723 0 0 1-.332-.048.492.492 0 0 1-.22-.112c0-.48-.005-.968-.014-1.465a354.45 354.45 0 0 1-.022-1.492 77.21 77.21 0 0 1-.005-1.474c.003-.486.017-.957.04-1.412.097-.024.203-.037.32-.04a10.117 10.117 0 0 1 .75.026c.132.01.257.014.378.014.251.385.502.786.75 1.198.249.415.517.815.805 1.2.144-.166.279-.352.403-.56.126-.208.252-.42.374-.64.123-.218.247-.432.373-.638.126-.207.26-.394.404-.56.095-.047.215-.083.355-.108.141-.023.284-.034.427-.034zm7.947 4.248a6.154 6.154 0 0 1-1.764.038 1.387 1.387 0 0 0-.077.457c0 .159.008.316.024.473.017.158.026.316.03.473.003.158-.021.31-.074.459h-1.398c-.006-.986-.023-2-.053-3.04a37.86 37.86 0 0 1 .034-3.04c.567-.023 1.122-.044 1.667-.062a9.149 9.149 0 0 1 1.509.066c.462.063.866.182 1.211.36.345.18.602.453.772.821.188.566.225 1.054.113 1.467a1.826 1.826 0 0 1-.685 1.003c-.342.255-.778.432-1.309.525zm-1.79-3.443v1.168c0 .362.004.721.01 1.079.29.03.59.03.9 0a2.25 2.25 0 0 0 .81-.219c.232-.119.402-.292.507-.522.107-.228.108-.537.005-.925-.058-.142-.177-.258-.357-.348a2.302 2.302 0 0 0-.609-.2 4.124 4.124 0 0 0-.685-.07 3.178 3.178 0 0 0-.58.037zm8.356.505c-.01.41-.017.817-.022 1.227a51.31 51.31 0 0 0-.005 1.21c.003.397.017.776.04 1.138.225.023.471.038.739.04.266.003.537.004.81.004s.543.002.81.005c.268.002.513.016.74.04a1.3 1.3 0 0 1 .053.261 2.952 2.952 0 0 1 0 .65c-.011.104-.03.192-.054.263h-4.5c0-.487-.004-.983-.014-1.491-.01-.506-.016-1.015-.023-1.529a81.75 81.75 0 0 1-.004-1.53c.003-.505.017-1.003.041-1.488.103-.024.216-.046.336-.068.123-.02.245-.033.37-.04.124-.006.246 0 .364.015.119.014.23.046.332.093 0 .39-.004.79-.013 1.2zm9.016 3.586a.81.81 0 0 0 .372-.378v-.087a.746.746 0 0 0-.289-.43 1.526 1.526 0 0 0-.474-.216 4.682 4.682 0 0 0-.55-.106 4.15 4.15 0 0 1-.528-.109 3.054 3.054 0 0 1-.97-.418 2.326 2.326 0 0 1-.647-.632c-.182-.442-.226-.825-.132-1.148.096-.326.276-.59.544-.798.267-.205.598-.355.99-.45a4.352 4.352 0 0 1 1.205-.121c.41.014.807.082 1.189.201.382.121.7.293.954.517-.11.19-.24.37-.39.542-.15.172-.307.308-.47.404-.092-.045-.21-.1-.353-.163a4.473 4.473 0 0 0-.985-.297c-.18-.03-.35-.038-.513-.021a1.149 1.149 0 0 0-.447.138.737.737 0 0 0-.308.343c.072.172.18.314.323.423.144.109.307.197.49.263.182.066.377.121.587.167.21.045.414.093.613.143.199.047.388.105.569.172a1.4 1.4 0 0 1 .454.262c.112.046.197.11.26.189.062.08.119.143.17.191.164.378.225.725.183 1.041a1.607 1.607 0 0 1-.348.82c-.19.234-.44.419-.75.556-.31.138-.654.22-1.033.243a5.391 5.391 0 0 1-1.038-.032 4.736 4.736 0 0 1-.867-.198 3.944 3.944 0 0 1-.724-.322 5.724 5.724 0 0 1-.612-.405c.11-.143.243-.285.396-.427.154-.14.312-.278.475-.417a5.1 5.1 0 0 0 .406.216c.167.08.346.156.539.229.193.07.393.131.602.18.209.047.406.069.594.06a1.33 1.33 0 0 0 .513-.125zm-24.294 5.095c.851.031 4.39.05 5.255.055.866.004 5.744.006 6.596.006.851 0 4.354-.061 10.328.074.196.003.1.446.112.7.011.254.016.487.016.702H39.231v-1.537zm.73 44.959c.256.261.455.58.596.959.142.377.212.827.212 1.349-.051.49-.161.924-.332 1.302-.17.379-.39.708-.66.993-.27.284-.589.52-.958.714-.369.191-.778.341-1.227.446a5.827 5.827 0 0 0-.746-.03c-.26.007-.52.012-.78.02-.26.005-.515.004-.76-.006a3.363 3.363 0 0 1-.69-.092v-1.624a127.642 127.642 0 0 1 .043-3.444c.017-.568.037-1.109.063-1.624 0-.013.003-.03.01-.05.012-.038.045-.057.095-.057a26.66 26.66 0 0 1 1.58.004c.507.016.983.067 1.425.152.443.084.844.205 1.204.362a2.9 2.9 0 0 1 .924.626zm-.787 2.789c.099-.361.069-.79-.091-1.293-.216-.4-.572-.694-1.067-.885-.495-.19-1.09-.262-1.785-.213a22.499 22.499 0 0 0-.077 1.9c0 .664.026 1.297.077 1.902.478.048.925.028 1.34-.06a2.403 2.403 0 0 0 1.04-.471c.277-.227.464-.521.563-.88zm7.097 1.1c-.277-.32-.552-.638-.828-.96-.277-.32-.566-.638-.869-.953 0 .63.013 1.265.04 1.907.025.643.013 1.256-.04 1.84h-1.497v-5.954a1.93 1.93 0 0 1 .7-.152c.249-.009.485.009.709.056.268.292.533.59.792.896l.783.93c.263.31.53.623.803.933.27.308.555.605.851.892 0-.287-.01-.587-.03-.907a17.66 17.66 0 0 1-.034-.954c-.003-.318.005-.63.024-.936.02-.308.07-.591.15-.854.215 0 .451.004.707.013.256.009.489.037.699.083v5.954c-.08.023-.171.035-.277.039a4.184 4.184 0 0 1-.32-.005 9.591 9.591 0 0 1-.315-.022 2.994 2.994 0 0 0-.272-.012 12.536 12.536 0 0 1-.927-.894c-.29-.31-.573-.622-.85-.94zm9.954-4.978c.249 0 .507.005.775.013.267.009.498.038.692.084-.194.494-.394.985-.6 1.474a525.648 525.648 0 0 0-1.24 2.958c-.208.5-.407 1.009-.602 1.526a1.005 1.005 0 0 0-.32-.018c-.114.014-.227.024-.337.038-.109.01-.21.011-.3.003a.269.269 0 0 1-.21-.12c-.249-.445-.48-.916-.693-1.407-.213-.493-.42-.988-.62-1.493-.2-.502-.4-1.005-.602-1.505-.2-.5-.41-.985-.63-1.456.098-.046.21-.084.338-.112a2.712 2.712 0 0 1 .794-.038c.127.012.24.03.337.053.292.666.568 1.359.83 2.08.262.718.538 1.413.829 2.077.243-.664.502-1.345.78-2.043.276-.698.536-1.402.78-2.114zm5.919 5.551c.01.164.014.317.014.463-.199.047-.43.07-.694.07a3.08 3.08 0 0 1-.695-.07v-5.987c.379-.017.77-.038 1.173-.062a18.24 18.24 0 0 1 1.172-.03c.379.003.74.03 1.083.079.342.05.646.138.911.266.264.129.48.304.644.525.166.22.267.51.303.865a2.861 2.861 0 0 1-.388 1.468c-.072.123-.145.244-.216.367-.15.048-.283.112-.398.193a1.425 1.425 0 0 1-.396.193c.126.17.26.342.4.519.142.179.282.357.421.539.138.18.267.36.388.54.12.182.216.357.288.525h-1.497a2.256 2.256 0 0 1-.402-.428 7.733 7.733 0 0 1-.334-.507l-.315-.52a3.606 3.606 0 0 0-.347-.476 1.003 1.003 0 0 0-.285-.026 3.754 3.754 0 0 0-.261.026c-.088.012-.176.02-.266.025a1.06 1.06 0 0 1-.29-.025c-.022.146-.036.3-.04.463-.002.163 0 .33.005.503.006.171.014.34.022.502zm.189-3.782a3.286 3.286 0 0 0-.025.416c0 .15.003.297.008.442.005.147.008.274.008.382h.545c.196 0 .39-.007.581-.022.192-.016.369-.042.532-.081a1.09 1.09 0 0 0 .407-.18.556.556 0 0 0 .211-.322c.034-.13.012-.296-.066-.496a.595.595 0 0 0-.327-.282c-.153-.06-.328-.1-.524-.122a4.915 4.915 0 0 0-.623-.032c-.219.004-.43.005-.636.005a.689.689 0 0 0-.091.292zM40 60.713c.851.032 4.39.05 5.255.055.866.004 5.745.007 6.596.007s4.354-.062 10.328.073c.196.004.101.447.112.7.011.254.017.487.017.702H40v-1.537z" />
          <path d="M89.203 26.13H100v5.17h-2.16v20.432H100v5.138H89.203v-5.138h2.45v-8.31h-12.15v8.31h2.063v5.138H70.769v-5.138h2.546V31.3h-2.546V26.13h10.797v5.17h-2.063v6.918h12.15V31.3h-2.45V26.13zm-4.586 53.428c-.205.08-.398.287-.588.638-.496.92-.952.652-1.567.025a9.43 9.43 0 0 0-.626-.561 17.58 17.58 0 0 0-.34-.278c-.317-.252-.637-.498-1.03-.831a8.734 8.734 0 0 1-.4-.37 5.378 5.378 0 0 1-.353-.381l-.168-.201c-.066-.086-.136-.173-.204-.26-.35-.434-.737-.86-1.131-1.374-.043-.063-.086-.114-.151-.212a5.832 5.832 0 0 1-.323-.51c-.1-.18-.19-.368-.279-.596a4.173 4.173 0 0 1-.183-.657 4.275 4.275 0 0 1-.027-1.225c-.248.229-.446.404-.691.628-.096.086-.193.172-.307.276-.117-.18-.24-.357-.366-.534-.084-.118-.17-.235-.362-.496-.285-.382-.571-.758-.953-1.286-.087-.123-.17-.246-.375-.551a9.182 9.182 0 0 1-.275-.457c-.056-.097-.106-.197-.157-.296-.044-.087-.092-.172-.143-.287a5.336 5.336 0 0 1-.261-.686 13.62 13.62 0 0 0-.632-1.69c-.114-.25-.235-.495-.389-.788-.136-.255-.28-.505-.48-.837-.982-1.586-2.238-2.963-3.547-4.322-5.798-6.028-11.635-12.027-17.45-18.037l-.715-.74c-1.555 1.565-3.105 3.136-4.66 4.698-4.145 4.164-8.294 8.332-12.485 12.457-1.682 1.655-3.356 3.31-4.773 5.222-.248.337-.485.683-.712 1.034-.086.134-.163.273-.245.409-.132.216-.264.432-.388.654-.16.294-.307.597-.452.9-.052.112-.112.216-.162.33-.186.418-.358.85-.511 1.296-.117.353-.611.57-1.14.735-.151.257-.294.514-.473.823-.137.233-.28.46-.442.672-.728.932-1.458 1.881-2.28 2.735-.584.597-.934.942-1.28 1.086a.806.806 0 0 1-.252.052c-.149.004-.304-.036-.517-.132a3.317 3.317 0 0 1-.285-.15 12.16 12.16 0 0 1-.375-.23l-.362-.232c-.02.088-.051.177-.079.261-.012.042-.022.081-.034.34.049.12.09.236.156.479.016.065.033.131.065.35.006.049.013.1.016.313 0 .04 0 .08-.024.287-.005.034-.01.068-.06.268-.009.028-.016.056-.092.25-.01.024-.02.047-.12.235-.011.02-.023.04-.143.221-.013.018-.025.035-.164.21-.013.016-.026.032-.18.199a7.854 7.854 0 0 1-.19.188c-.023.021-.045.043-.198.18l-.195.165c-.157.131-.32.26-.482.39-.066.048-.13.105-.195.153a1.47 1.47 0 0 1-.54.292c-.022-.002-.045-.014-.232-.103-.04-.03-.08-.057-.195-.174-.053-.054-.107-.11-.238-.264a32.47 32.47 0 0 1-.638-.8c-.984.866-1.968 1.724-2.93 2.595-.381.349-.667.845-1.101 1.072-.342.177-.845.046-1.273.05.01-.436-.16-1.025.059-1.286.844-1.024 1.798-1.957 2.748-2.893.272-.274.472-.526.541-.779l-.033-.437c-.083-.204-.29-.397-.64-.585-.917-.489-.658-.95-.042-1.578.153-.158.297-.325.551-.636.092-.114.183-.23.272-.347.247-.321.487-.645.814-1.044.1-.121.204-.24.364-.41.119-.126.243-.245.372-.358l.198-.172.256-.207c.427-.358.846-.753 1.352-1.155.061-.043.113-.088.209-.154a4.803 4.803 0 0 1 1.092-.618c.185-.074.38-.132.65-.193a4.147 4.147 0 0 1 1.216-.039c-.23-.249-.407-.445-.631-.69a173.69 173.69 0 0 0-.277-.305c.177-.122.351-.247.524-.375.118-.086.233-.174.49-.37.376-.292.747-.583 1.266-.973.121-.09.243-.175.543-.384.149-.1.298-.193.45-.283.096-.057.195-.108.293-.16.085-.046.17-.095.282-.147.223-.105.448-.2.679-.271a13.412 13.412 0 0 0 2.45-1.055c.25-.14.497-.288.825-.494 1.565-1.005 2.917-2.285 4.252-3.617 5.921-5.906 11.813-11.85 17.717-17.774l.891-.893c-6.547-6.768-13.089-13.541-19.633-20.31-2.113-2.191-4.22-4.394-6.355-6.57-.553-.563-1.117-1.119-1.683-1.671-.087-.087-.176-.173-.264-.259-.603-.585-1.21-1.165-1.819-1.743-.09-.086-.182-.17-.39-.352-.11-.09-.223-.18-.467-.34-.149.06-.287.128-.54.376-.014.017-.028.035-.124.24a1.341 1.341 0 0 0-.053.262s-6.018-8.19-7.23-10.014c-1.221-1.826.452-.859.452-.859s6.108 4.74 8.978 6.709c.322.215.585.385.628.615-.03.03-.062.065-.218.266a3.53 3.53 0 0 0-.156.27 1.599 1.599 0 0 0-.084.241c-.012.047-.018.1-.048.325-.003.113.005.232.002.386.123.19.246.377.379.558.144.202.298.397.456.586.187.23.376.45.58.67.172.184.343.37.518.552.235.25.484.498.736.741.615.61 1.24 1.21 1.822 1.836 4.5 4.84 9.233 9.469 13.848 14.196 3.943 4.04 7.875 8.093 11.808 12.144 6.593-6.614 13.192-13.222 19.788-19.834 2.15-2.15 4.313-4.298 6.45-6.47.553-.565 1.099-1.138 1.642-1.714.084-.09.17-.178.254-.269.575-.614 1.145-1.23 1.711-1.851.084-.092.166-.186.343-.397.091-.112.178-.227.333-.474-.06-.149-.129-.288-.377-.54-.018-.013-.036-.027-.24-.123a1.443 1.443 0 0 0-.26-.05s8.064-6.15 9.863-7.39c1.798-1.25.856.445.856.445s-4.64 6.203-6.563 9.117c-.21.326-.376.594-.603.639a2.803 2.803 0 0 0-.266-.217 2.966 2.966 0 0 0-.27-.155 1.642 1.642 0 0 0-.24-.082c-.047-.012-.1-.016-.324-.045-.112-.002-.23.007-.383.007-.185.126-.372.253-.55.388-.2.148-.39.305-.576.465-.226.193-.442.383-.66.593-.18.174-.364.348-.541.527-.247.239-.49.491-.728.748-.598.628-1.188 1.264-1.804 1.857-4.755 4.585-9.298 9.401-13.941 14.1-3.921 3.97-7.856 7.926-11.788 11.884 1.492 1.538 2.99 3.07 4.48 4.607 4.088 4.22 8.18 8.444 12.229 12.71 1.624 1.712 3.25 3.415 5.132 4.864.333.253.673.496 1.02.729.131.087.269.166.403.25.213.136.425.272.645.397.29.166.589.318.89.466.108.054.212.115.323.166.414.194.84.37 1.282.53.35.122.56.622.718 1.155.254.156.507.304.812.487.228.14.453.285.662.452.917.744 1.852 1.488 2.69 2.327.586.593.924.95 1.064 1.3a.79.79 0 0 1 .048.255c.003.149-.038.306-.136.519a3.65 3.65 0 0 1-.152.284c-.054.093-.118.197-.232.376-.072.112-.148.23-.235.362.089.021.175.054.26.082.04.013.08.023.336.039.12-.048.235-.088.477-.151.066-.016.13-.034.349-.063.049-.006.1-.013.31-.013.04.001.08.001.285.028.033.006.067.01.265.063.028.009.055.017.248.096.023.01.047.02.232.123.02.011.039.023.218.147.017.012.034.024.206.167.015.013.031.026.195.183.017.015.032.032.186.194l.175.201c.036.043.073.087.162.197.13.161.255.326.383.49.046.067.101.133.148.2.112.142.192.253.285.547-.002.02-.015.046-.105.231-.03.04-.056.08-.175.195a4.043 4.043 0 0 1-.264.236 29.03 29.03 0 0 1-.802.634c.85 1.001 1.69 2.001 2.544 2.981.342.388.832.681 1.052 1.12.174.346.038.85.037 1.282-.433-.014-1.02.15-1.276-.072-1.007-.863-1.922-1.833-2.842-2.8-.269-.278-.517-.482-.768-.554l-.433.03zM29.23 34.72h-5.218v-3.39h-6.252v20.408h3.425v5.132H8.079v-5.132H11.5V31.33H5.217v3.39H0v-8.59H29.231v8.59z" />
        </g>
      </svg>

      <!-- <svg class="logo" width="100" height="83">
        <use attr.xlink:href="./assets/symbol-defs.svg#icon-logo"></use>
      </svg> -->
      <h1 class="hide">iamtravishall.com | the online portfolio of UX Designer and UI Developer Travis Hall</h1>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
