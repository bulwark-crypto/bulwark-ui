import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

process.env = {
  REBEM_MOD_DELIM: '--',
  REBEM_ELEM_DELIM: '__'
}
