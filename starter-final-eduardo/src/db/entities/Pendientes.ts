import { ListValueNode } from 'graphql'
import 'reflect-metadata'
import { ObjectType, Field, ID, registerEnumType } from 'type-graphql'

@ObjectType()
export class Pendientes {
    @Field((type) => ID)
    id: string

    //@Field((type) => Lista)
    //lista?: Lista

    @Field()
    listaId?: string

    @Field((type) => Date)
    listaFinishTime?: Date

    @Field((type) => Boolean, { defaultValue: true })
    isFinish: boolean

   // @Field((type) => PendienteType)
    //pendienteType: PendienteType
}