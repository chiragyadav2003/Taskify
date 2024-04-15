import { auth, OrganizationSwitcher } from "@clerk/nextjs";

const OranizationIdPage = () => {
    const { userId, orgId } = auth()
    return (
        <div>
            OrganizationIdPage
            userId - {userId}
            orgId - {orgId}
            <OrganizationSwitcher hidePersonal />
        </div>
    )
}

export default OranizationIdPage;