<template>
  <cards :arrObj=arrObj :initCol="initCol"></cards>
</template>

<script>
import Cards from '../../cards/cards'
export default {
  name: 'GreatOnGas',
  props: {
    initCol: {
      type: String,
      default: 'col-sm-4 col-md-4 col-lg-4'
    }
  },
  components: { Cards },
  data () {
    return {
      arrObj: [
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no',
          on_fire: 'on_fire'
        },
        {
          status: {
            availability: {
              msg: ['Sorry Vehicle', 'Has Been', 'Sold'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: ''
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no',
          on_fire: ''
        },
        {
          status: {
            availability: {
              msg: ['Vehicle', 'Is Reserved', 'Contingent'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #ff9800'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no',
          on_fire: ''
        },
        {
          status: {
            availability: {
              msg: ['Vehicle', 'Is : ', 'HOT!'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: rgb(244, 67, 54)'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no',
          on_fire: 'on-fire' },
        {
          status: {
            availability: {
              msg: ['Vehicle', 'Is Reserved', 'Contingent'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #ff9800'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no',
          on_fire: ''
        },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no',
          on_fire: '' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
