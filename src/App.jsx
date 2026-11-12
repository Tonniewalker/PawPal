import Game from './Game'
import Splash from './components/Splash'
import ChoosePet from './pages/ChoosePet'
import Welcome from './pages/Welcome'
import { useAccount } from './useAccount'

// ===== เช็กบัญชี แล้วเข้าเกม =====
export default function App() {
  const acc = useAccount()

  switch (acc.status) {
    case 'checking':
      return <Splash />
    case 'migrating':
      return <Splash message="กำลังย้ายข้อมูลขึ้นบัญชี…" />
    case 'error':
      return <Splash message="ย้ายข้อมูลไม่สำเร็จ ตรวจสอบอินเทอร์เน็ตแล้วลองใหม่" onRetry={() => window.location.reload()} />
    case 'welcome':
      return <Welcome onGuest={acc.playAsGuest} onSignIn={acc.signIn} />
    case 'conflict':
      return (
        <ChoosePet
          account={acc.account}
          local={acc.local}
          remote={acc.remote}
          onChoose={acc.resolveConflict}
          onCancel={acc.cancelConflict}
        />
      )
    default: {
      // guest / user → เข้าเกม
      const account =
        acc.status === 'user'
          ? { mode: 'user', ...acc.account, signOut: acc.signOut }
          : { mode: 'guest', signIn: acc.signIn }
      return (
        <Game
          key={acc.status === 'user' ? acc.account.uid : 'guest'}
          store={acc.store}
          account={account}
          notice={acc.notice}
        />
      )
    }
  }
}
