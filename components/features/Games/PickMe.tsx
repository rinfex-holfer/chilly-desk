import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"

export const PickMe = () => {
    return (
        <Menu>
            <MenuButton>More</MenuButton>
            <MenuItems>
                <MenuItem>
                    <div className="data-[focus]:bg-blue-100">
                        Settings
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="data-[focus]:bg-blue-100">
                        Support
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="data-[focus]:bg-blue-100">
                        License
                    </div>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}
