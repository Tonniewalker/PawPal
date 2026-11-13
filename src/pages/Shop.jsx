import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Coin } from '../components/TopBar'
import { FOODS } from '../config'
import { foodCount } from '../petLogic'

// ===== ร้านค้า =====
export default function Shop({ pet, onBuy }) {
  const [tab, setTab] = useState('food')
  const [flash, setFlash] = useState(null) // ชิ้นที่เพิ่งซื้อ (โชว์ +1)

  function buy(key) {
    const result = onBuy(key)
    if (!result.ok) return
    setFlash({ key, id: Date.now() })
    setTimeout(() => setFlash(null), 700)
  }

  const coins = (
    <span className="flex items-center gap-1.5 rounded-full bg-white py-1.5 pl-1.5 pr-3 shadow-[0_3px_0_rgba(46,58,89,0.12)]" aria-label={`มีเหรียญ ${pet.coins}`}>
      <Coin />
      <span className="text-base font-bold tabular-nums">{pet.coins}</span>
    </span>
  )

  return (
    <div className="mx-auto min-h-screen max-w-[440px] bg-paper pb-8">
      <PageHeader title="ร้านค้า" right={coins} />

      <div role="tablist" aria-label="หมวดสินค้า" className="mx-5 mt-1 grid grid-cols-2 gap-1 rounded-2xl bg-line p-1">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'food'}
          onClick={() => setTab('food')}
          className={`rounded-xl py-2 font-semibold ${tab === 'food' ? 'bg-white shadow-sm' : 'text-ink/60'}`}
        >
          🍖 อาหาร
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'clothes'}
          onClick={() => setTab('clothes')}
          className={`rounded-xl py-2 font-semibold ${tab === 'clothes' ? 'bg-white shadow-sm' : 'text-ink/60'}`}
        >
          👕 ชุดแต่งตัว
        </button>
      </div>

      {tab === 'clothes' ? (
        <p className="mx-5 mt-8 rounded-2xl border-2 border-dashed border-line p-6 text-center text-ink/60">
          🔒 ชุดแต่งตัว Open Soon
        </p>
      ) : (
        <ul className="mx-5 mt-4 grid grid-cols-2 gap-3">
          {Object.entries(FOODS).map(([key, f]) => {
            const count = foodCount(pet, key)
            const free = f.price === 0
            const canBuy = pet.coins >= f.price
            return (
              <li key={key} className="relative flex flex-col items-center rounded-2xl border-2 border-line bg-white p-3 text-center">
                <span className="text-5xl leading-none" aria-hidden="true">
                  {f.icon}
                </span>
                <span className="mt-2 text-lg font-bold">{f.label}</span>
                <span className="mt-1 flex flex-wrap justify-center gap-1 text-xs">
                  <span className="rounded-full bg-[#FFE8D1] px-2 py-0.5">🍖 +{f.food}</span>
                  {f.fun && <span className="rounded-full bg-[#FFF3C4] px-2 py-0.5">😊 +{f.fun}</span>}
                  <span className="rounded-full bg-paper px-2 py-0.5">+{f.exp} EXP</span>
                </span>
                <span className="mt-2 text-sm text-ink/60">มีอยู่ {free ? 'ไม่จำกัด' : `${count} ชิ้น`}</span>
                {free ? (
                  <span className="mt-2 w-full rounded-2xl bg-leaf/15 py-2 font-semibold text-[#3E7A2A]">ฟรี</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => buy(key)}
                    disabled={!canBuy}
                    aria-label={`ซื้อ${f.label} ราคา ${f.price} เหรียญ`}
                    className="care-btn mt-2 flex w-full items-center justify-center gap-1.5 rounded-2xl border-sun-dark bg-sun py-2 font-bold disabled:border-line disabled:bg-line disabled:text-ink/50"
                  >
                    <Coin size={18} /> {f.price}
                  </button>
                )}
                {flash?.key === key && (
                  <span key={flash.id} className="pop-up pointer-events-none absolute left-1/2 top-2 font-bold text-[#3E7A2A]">
                    +1
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      )}
      {tab === 'food' && <p className="mx-5 mt-4 text-center text-sm text-ink/60">ได้เหรียญจากการดูแลน้อง เลเวลอัป และโบนัสรายวัน</p>}
    </div>
  )
}
